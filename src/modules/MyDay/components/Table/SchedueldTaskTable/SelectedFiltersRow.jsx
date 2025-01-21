import React from "react";
import { Row, Col, Tag, Divider, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const SelectedFiltersRow = ({
  selectedFilters,
  handleFilterChange,
  clearAllFilters,
}) => {
  return (
    <>
      <Divider style={{ margin: 0 }} />
      <Row
        style={{ margin: "1rem 2rem" }}
        align="middle"
        justify="space-between"
      >
        <Col>
          {selectedFilters.map((filter) => (
            <Tag
              key={filter.value}
              closable
              onClose={() =>
                handleFilterChange(filter.key, filter.value, false)
              }
              style={{
                padding: "0.5rem",
                borderRadius: "1.5rem",
                backgroundColor: "#E8EBF7",
              }}
            >
              {`${filter.value} `}
            </Tag>
          ))}
        </Col>
        <Col>
          <Button
            type="default"
            variant="outlined"
            shape="round"
            onClick={clearAllFilters}
            icon={<CloseOutlined />}
            iconPosition="end"
            style={{color:"red"}}
          >
            Clear All Filters
          </Button>
        </Col>
      </Row>

      <Divider style={{ margin: 0 }} />
    </>
  );
};

export default SelectedFiltersRow;
