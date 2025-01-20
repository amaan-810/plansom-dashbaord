import React from "react";
import { Row, Col, Space,Button } from "antd";
import { FilterOutlined, CloseOutlined } from "@ant-design/icons";
import rightArrow from "../../../../../assets/images/rightArrow.svg";

const TableHeader = ({ isFilterRowVisible, setFilterRowVisible }) => {
  return (
    <Row justify="space-between" align="middle" style={{ margin: "2rem" }}>
        <Col>
          <Text className="f-bricolage fw-600" style={{ fontSize: "1.5rem" }}>
            Scheduled Tasks for Today
          </Text>
        </Col>
        <Col>
          <Space>
            <Button
              icon={isFilterRowVisible ? <CloseOutlined /> : <FilterOutlined />}
              iconPosition={isFilterRowVisible ? "end" : "start"}
              shape="round"
              size="large"
              className="fw-600"
              onClick={() => setFilterRowVisible(!isFilterRowVisible)}
            >
              Filter
            </Button>
            <Button size="large" shape="round" className="fw-600">
              View All <img src={rightArrow} alt="" />
            </Button>
          </Space>
        </Col>
      </Row>
  );
};

export default TableHeader;
