import React, { useState, useEffect } from "react";
import {
  Row,
  Card,
  Divider,

} from "antd";

import "../../styles/tableCard.css";

import axios from "axios";
import getDecryptAuthData from "../../../../core/Utils/encryption/getDecryptAuthData";
import TableHeader from "./schedueldTaskTable/TableHeader";
import FilterRow from "./schedueldTaskTable/FilterRow";
import SelectedFiltersRow from "./schedueldTaskTable/SelectedFiltersRow";
import TaskTable from "./schedueldTaskTable/TaskTable";
import AddTaskForm from "./schedueldTaskTable/AddTaskForm";

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
        <TaskTable
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </Row>
      <Divider style={{ margin: 0 }} />

      <AddTaskForm/>
    </Card>
  );
};

export default ScheduledTaskTable;
