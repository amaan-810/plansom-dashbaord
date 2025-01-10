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
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import jsonData from "../../../../../response/table.json"; // Assuming the JSON file is saved as table.json
import "../../styles/tableCard.css";
const MyDayTable = () => {
  // Define columns
  const formatEffort = (effort) => {
    const hours = Math.floor(effort);
    const minutes = Math.round((effort - hours) * 60);
    return `${hours}h ${minutes}m`;
  };

  // Define menu for the Outcome dropdown
  const menu = (
    <Menu
      items={[
        { key: "in-progress", label: "In progress" },
        { key: "completed", label: "Completed" },
        { key: "not-started", label: "Not started" },
      ]}
    />
  );

  // Define columns
  const columns = [
    { title: "Task", dataIndex: "task", key: "task" },
    {
      title: "Goal",
      dataIndex: "goal",
      key: "goal",
      render: (_, record) => (
        <>
          <div>{record.goal.name}</div>
          <Progress percent={record.goal.completedPercent} size="small" />
        </>
      ),
    },
    { title: "Who", dataIndex: "who", key: "who" },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (_, record) => <Switch checked={record.active} />,
    },
    {
      title: "Impact",
      dataIndex: "impact",
      key: "impact",
      render: (impact) => (
        <Badge
          color={
            impact === "High" ? "red" : impact === "Medium" ? "orange" : "green"
          }
          text={impact}
        />
      ),
    },
    {
      title: "Effort",
      dataIndex: "effort",
      key: "effort",
      render: (effort) => formatEffort(effort),
    },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Due In", dataIndex: "dueIn", key: "dueIn" },
    {
      title: "Outcome",
      dataIndex: "outcome",
      key: "outcome",
      render: (outcome) => (
        <Dropdown overlay={menu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{outcome}</a>
        </Dropdown>
      ),
    },
  ];

  // Extract data source from JSON
  const dataSource = jsonData.data.task_list.map((task) => ({
    key: task.id, // Unique key
    task: task.name,
    goal: {
      name: task.goal?.name,
      completedPercent: task.goal?.goal_completed_percent || 0,
    },
    who: task.goal?.goal_owner?.first_name,
    active: task.status,
    impact: task.task_impact,
    effort: task.task_effort,
    type: task.task_type,
    dueIn: task.due_in,
    outcome: task.task_success,
  }));

  return (
    <Card
      style={{
        // margin: "20px",
        //  padding: "20px"
        borderRadius: "1rem",
      }}
      className="myday-tb-card"
    >
      {/* Top Header Section */}
      <Row
        justify="space-between"
        align="middle"
        style={{ margin: "2rem" }}
      >
        <Col>
          <h2>Scheduled Tasks for Today</h2>
        </Col>
        <Col>
          <Space>
            <Button>Filter</Button>
            <Button type="primary">View All</Button>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: 0 }} />
      <Row>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          style={{ width: "100%" }}
        />
      </Row>

      <Divider style={{ margin: 0 }} />
      <Row style={{ margin: "2rem", textAlign: "center" }}>
        <Button type="text" icon={<PlusOutlined />}>
          Add Task
        </Button>
      </Row>
    </Card>
  );
};

export default MyDayTable;
