import React from "react";
import {
  Row,
  Col,
  Divider,
  Button,
  Progress,
  Flex,
  Switch,
  Dropdown,
  Menu,
} from "antd";
import Text from "antd/es/typography/Text";
import {
  EllipsisOutlined,
  FlagFilled,
  DownOutlined,
  DockerOutlined,
} from "@ant-design/icons";
import STFlex from "./STFlex";

const STCard = ({ data }) => {
  const formatEffort = (effort) => {
    const hours = Math.floor(effort);
    const minutes = Math.round((effort - hours) * 60);
    return `${hours}h ${minutes}m`;
  };

  const items = [
    { key: "in-progress", label: "In progress" },
    { key: "completed", label: "Completed" },
    { key: "not-started", label: "Not started" },
  ];

  return (
    <>
      {data?.map((task) => {
        return (
          <Row key={task.id} style={{ width: "100%" }}>
            <Divider style={{ margin: 0 }} />
            <Row style={{ width: "100%", margin: "1rem" }}>
              <STFlex>
                <Text className="fw-600">{task.name}</Text>
                <Button
                  icon={<EllipsisOutlined />}
                  iconPosition="start"
                  type="text"
                ></Button>
              </STFlex>
              <>
                <Text style={{ color: "#565C76" }}>{task.goal?.name}</Text>
                <Progress
                  percent={task.goal?.goal_completed_percent}
                  size="small"
                  showInfo={false}
                  strokeColor={
                    task.goal?.goal_status === "Inactive"
                      ? "#DDDEE4"
                      : task.goal?.goal_status === "On track"
                      ? "#0B9060"
                      : task.goal?.goal_status === "At risk"
                      ? "#FAAD14"
                      : "#FF4D4F"
                  }
                />
              </>

              <STFlex>
                <Text className="fw-600">Who</Text>
                <Text>
                  {task.goal?.goal_owner?.last_name.charAt(0).toUpperCase()}.{" "}
                  {task.goal?.goal_owner?.first_name}
                </Text>
              </STFlex>

              <STFlex>
                <Text className="fw-600">Active</Text>
                <Switch checked={task.status} />
              </STFlex>

              <STFlex>
                <Text className="fw-600">Impact</Text>
                <Text>
                  <FlagFilled
                    style={{
                      color:
                        task.task_impact === "High"
                          ? "#FF4D4F"
                          : task.task_impact === "Medium"
                          ? "#FAAD14"
                          : "#0B9060",
                      marginRight: "0.5rem",
                    }}
                  />
                  {task.task_impact}
                </Text>
              </STFlex>
              <STFlex>
                <Text className="fw-600">Effort</Text>
                <Text>{formatEffort(task.task_effort)}</Text>
              </STFlex>

              <STFlex>
                <Text className="fw-600">Type</Text>
                <Text>{task.task_type}</Text>
              </STFlex>

              <Flex
                style={{ margin: "1rem 0rem", width: "100rem" }}
                justify="space-between"
              >
                <Text className="fw-600">Due In</Text>
                <Text>{task.due_in}</Text>
              </Flex>

              <Dropdown Menu={items} trigger={["click"]}>
                <Button
                  //   icon={<DownOutlined />}
                  //   iconPosition="end"
                  shape="round"
                  type="default"
                  onClick={(e) => e.preventDefault()}
                  style={{ width: "100%" }}
                >
                  <Flex justify="space-between" style={{ width: "100%" }}>
                    <Text className="fw-600">{task.task_success}</Text>
                    <DownOutlined />
                  </Flex>
                </Button>
              </Dropdown>
            </Row>

            <Divider style={{ margin: 0 }} />
          </Row>
        );
      })}
    </>
  );
};

export default STCard;
