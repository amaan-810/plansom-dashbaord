import React, { useState } from "react";
import {
  Button,
  Row,
  Card,
  Divider,

} from "antd";
import {

  PlusOutlined,
} from "@ant-design/icons";
import "../../styles/tableCard.css";


import axios from "axios";
import getDecryptAuthData from "../../../../core/Utils/encryption/getDecryptAuthData";
import TableHeader from "./SchedueldTaskTable/TableHeader";
import FilterRow from "./SchedueldTaskTable/FilterRow";
import SelectedFiltersRow from "./SchedueldTaskTable/SelectedFiltersRow";
import TaskTable from "./SchedueldTaskTable/TaskTable";

const ScheduledTaskTable = ({ tableData }) => {
  const authData = getDecryptAuthData();
  const authToken = authData?.data?.accessToken;
  const filterUrl = import.meta.env.VITE_MYDAY_TABLE_FILTER_URL;
  const [isFilterRowVisible, setFilterRowVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(tableData?.data?.task_list);

  const handleFilterChange = (filterKey, value, checked) => {
    let newFilters = [...selectedFilters];

    if (checked) {
      newFilters.push({ key: filterKey, value });
    } else {
      newFilters = newFilters.filter(
        (filter) => filter.key !== filterKey || filter.value !== value
      );
    }

    setSelectedFilters(newFilters); // Update the state
    console.log("Updated Filters:", newFilters);

    applyFilters(newFilters);
  };

  const applyFilters = async (filters) => {
    const queryParams = filters
      .map((filter) => `${filter.key}=${filter.value}`)
      .join("&");

    console.log("Filters being applied:", filters);

    try {
      const response = await axios.post(
        `${filterUrl}?${queryParams}`,
        {}, // Empty body
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("API URL:", `${filterUrl}?${queryParams}`);
      console.log("Filtered Data Response:", response.data);

      setFilteredData(response?.data?.data?.task_list);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setFilteredData(tableData?.data?.task_list);
    setFilterRowVisible(false);
  };

  const removeFilter = (filterKey) => {
    const newFilters = selectedFilters.filter((f) => f.key !== filterKey);
    setSelectedFilters(newFilters);
    if (newFilters.length === 0) {
      clearAllFilters();
    } else {
      applyFilters();
    }
  };

  return (
    <Card
      style={{ borderRadius: "1rem", marginBottom: "1rem" }}
      className="myday-tb-card"
    >
      <TableHeader
        isFilterRowVisible={isFilterRowVisible}
        setFilterRowVisible={setFilterRowVisible}
      />

      {isFilterRowVisible && (
        <FilterRow
          handleFilterChange={handleFilterChange}
          clearAllFilters={clearAllFilters}
          selectedFilters={selectedFilters}
        />
      )}

      {selectedFilters.length > 0 && !isFilterRowVisible && (
        <SelectedFiltersRow
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          clearAllFilters={clearAllFilters}
        />
      )}
      <Divider style={{ margin: 0 }} />
      <Row>
        <TaskTable filteredData={filteredData} setFilteredData={setFilteredData} />
      </Row>
      <Divider style={{ margin: 0 }} />
      <Row style={{ margin: "2rem", textAlign: "center" }}>
        <Button type="text" icon={<PlusOutlined />} className="fw-600">
          Add Task
        </Button>
      </Row>
    </Card>
  );
};

export default ScheduledTaskTable;
