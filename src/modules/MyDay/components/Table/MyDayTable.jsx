import React from "react";
import {
  Table,
  Progress,
  Switch,
  Dropdown,
  Button,
  Row,
  Col,
  Space,
  Card,
  Divider,
  Flex,
} from "antd";
import {
  DownOutlined,
  EllipsisOutlined,
  FilterOutlined,
  FlagFilled,
  PlusOutlined,
} from "@ant-design/icons";
import jsonData from "../../../../../response/table.json";
import "../../styles/tableCard.css";
import Text from "antd/es/typography/Text";

import rightArrow from "../../../../assets/images/rightArrow.svg";
const MyDayTable = () => {
 

  const formatEffort = (effort) => {
    const hours = Math.floor(effort);
    const minutes = Math.round((effort - hours) * 60);
    return `${hours}h ${minutes}m`;
  };

  const getStrokeColor = (status) => {
    if (status === "Inactive") {
      return "#DDDEE4";
    } else if (status === "On track") {
      return "#0B9060";
    } else if (status === "At risk") {
      return "#FAAD14";
    } else {
      return "#FF4D4F";
    }
  };

  const getFlagColor = (impact) => {
    if (impact === "High") {
      return "#FF4D4F";
    } else if (impact === "Medium") {
      return "#FAAD14";
    } else {
      return "#0B9060"; 
    }
  };




  const items = [
    { key: "in-progress", label: "In progress" },
    { key: "completed", label: "Completed" },
    { key: "not-started", label: "Not started" },
  ];

  // Define columns
  const columns = [
    { title: "Task", dataIndex: "task", key: "task" },
    {
      title: "Goal",
      dataIndex: "goal",
      key: "goal",
      render: (_, record) => (
        <>
          <div style={{ color: "#565C76" }}>{record.goal.name}</div>
          <Progress
            percent={record.goal.completedPercent}
            size="small"
            showInfo={false}
            strokeColor={
             getStrokeColor(record?.goal.goalStatus)
            }
          />
        </>
      ),
    },
    {
      title: "Who",
      dataIndex: "who",
      key: "who",
      render: (_, record) => {
        const truncatedName =
          record?.who?.firstName?.length > 8
            ? `${record?.who?.firstName.slice(0, 8)}...`
            : record?.who?.firstName;
        return (
          <Text>
            {record?.who?.LastName.charAt(0).toUpperCase() + ". "}
            {truncatedName}
          </Text>
        );
      },
    },
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
        <Text>
          <FlagFilled
            style={{
              color: getFlagColor(impact),
              marginRight: "0.5rem",
            }}
          />
          {impact}
        </Text>
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
        <Flex>
          <Dropdown menu={{items}} trigger={["click"]}>
            <Button
              icon={<DownOutlined />}
              iconPosition="end"
              shape="round"
              onClick={(e) => e.preventDefault()}
            >
              {outcome}
            </Button>
          </Dropdown>
          <Button
            icon={<EllipsisOutlined />}
            iconPosition="start"
            type="text"
          ></Button>
        </Flex>
      ),
    },
  ];

  const dataSource = jsonData.data.task_list.map((task) => ({
    key: task.id, // Unique key
    task: task.name,
    goal: {
      name: task.goal?.name,
      completedPercent: task.goal?.goal_completed_percent || 0,
      goalStatus: task.goal?.goal_status,
    },
    who: {
      firstName: task.goal?.goal_owner?.first_name,
      LastName: task.goal?.goal_owner?.last_name,
    },
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
        borderRadius: "1rem",
        marginBottom: "1rem",
       
      }}
      className="myday-tb-card"
    >
      {/* Top Header Section */}
      <Row justify="space-between" align="middle" style={{ margin: "2rem" }}>
        <Col>
          <Text className="f-bricolage fw-600 " style={{ fontSize: "1.5rem" }}>
            Scheduled Tasks for Today
          </Text>
        </Col>
        <Col>
          <Space>
            <Button
              icon={<FilterOutlined />}
              iconPosition="start"
              shape="round"
              size="large"
              className="fw-600"
            >
              Filter
            </Button>
            <Button size="large" shape="round" className="fw-600">
              View All <img src={rightArrow} alt="" />
            </Button>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: 0 }} />
      <Row>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          style={{ width: "100%", overflow: "auto", }}
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
