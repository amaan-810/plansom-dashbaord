import React from "react";
import { Row, Col, Tag } from "antd";
import STButton from "./STButton";
import { CloseOutlined } from "@ant-design/icons";

const SelectedFiltersRow = ({ selectedFilters, handleFilterChange, clearAllFilters }) => {
  return (
    <Row style={{ margin: "1rem 2rem" }} align="middle" justify="space-between">
      <Col>
        {selectedFilters.map((filter) => (
          <Tag
            key={filter.value}
            closable
            onClose={() => handleFilterChange(filter.key, filter.value, false)}
            style={{ padding: "0.5rem", borderRadius: "1.5rem", backgroundColor: "#E8EBF7" }}
          >
            {`${filter.value}`}
          </Tag>
        ))}
      </Col>
      <Col>
        <STButton
          label="Clear All Filters"
          icon={<CloseOutlined />}
          onClick={clearAllFilters}
        />
      </Col>
    </Row>
  );
};

export default SelectedFiltersRow;
