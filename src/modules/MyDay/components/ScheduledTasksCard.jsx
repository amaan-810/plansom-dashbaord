import React from "react";
import {
  Table,
  Progress,
  Switch,
  Badge,
  Dropdown,
  Menu,
  Button,
  Row,
  Col,
  Space,
  Card,
  Divider,
  Flex,
} from "antd";
import {
  EllipsisOutlined,
  FilterOutlined,
  FlagFilled,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import jsonData from "../../../../response/table.json";
import "../styles/tableCard.css";

import Text from "antd/es/typography/Text";


import STCard from "./Cards/STCard";

const ScheduledTasksCard = () => {

  

  return (
    <Card
      style={{
        borderRadius: "1rem",
        marginBottom: "1rem",
      }}
      className="myday-tb-card"
    >
      {/* Top Header Section */}
      <Row
        justify="center"
        align="middle"
        style={{ margin: "2rem 2rem 0rem 2rem" }}
      >
        <Col>
          <Flex  justify="center"align="center" >
            <Text className="f-bricolage fw-600 " style={{ fontSize: "1.5rem",textAlign:"center" }}>Scheduled Tasks for Today</Text>
          </Flex>
        </Col>
      </Row>
      <Row style={{ margin: "1rem" }} justify="space-around">
        <Col span={10}>
          <Button
            icon={<FilterOutlined />}
            iconPosition="start"
            shape="round"
            size="large"
            className="fw-600"
            style={{ width: "100%" }}
          >
            Filter
          </Button>
        </Col>
        <Col span={10}>
          <Button
            style={{ width: "100%" }}
            size="large"
            shape="round"
            className="fw-600"
            icon={<RightOutlined />}
            iconPosition="end"
          >
            View All
          </Button>
        </Col>
      </Row>
      <Divider style={{ margin: 0 }} />

      <STCard data={jsonData?.data?.task_list} />

      <Divider style={{ margin: 0 }} />
      <Row style={{ margin: "2rem", textAlign: "center" }}>
        <Button type="text" icon={<PlusOutlined />}>
          Add Task
        </Button>
      </Row>
    </Card>
  );
};

export default ScheduledTasksCard;
