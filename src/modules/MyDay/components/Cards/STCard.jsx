import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Divider,
  Button,
  Progress,
  Flex,
  Switch,
  Dropdown,
} from "antd";
import Text from "antd/es/typography/Text";
import {
  EllipsisOutlined,
  FlagFilled,
  DownOutlined,
} from "@ant-design/icons";
import STFlex from "./STFlex";

const STCard = ({ data }) => {

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
                  strokeColor={getStrokeColor(task?.goal?.goal_status)}
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
                      getFlagColor(task.task_impact),
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

              <Dropdown menu={{items}}>
                <Button
                size="large"
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

STCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      goal: PropTypes.shape({
        name: PropTypes.string,
        goal_completed_percent: PropTypes.number,
        goal_status: PropTypes.string,
        goal_owner: PropTypes.shape({
          first_name: PropTypes.string,
          last_name: PropTypes.string,
        }),
      }),
      status: PropTypes.string,
      task_impact: PropTypes.string,
      task_effort: PropTypes.number,
      task_type: PropTypes.string,
      due_in: PropTypes.string,
      task_success: PropTypes.string,
    })
  ).isRequired,
};

export default STCard;
