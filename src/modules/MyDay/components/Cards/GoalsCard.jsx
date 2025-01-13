// GoalsCard.jsx
import React from "react";
import { Card, Flex, Progress, Row } from "antd";
import {
  RocketFilled,
  WarningFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";



const GoalsCard = ({ cardData }) => {
  const getGoalIcon = (goal) => {
    if (goal?.goal_status === "On track")
      return <RocketFilled style={{ color: "#0B9060" }} />;
    else if (goal?.goal_status === "At risk")
      return <WarningFilled style={{ color: "#FFA726" }} />;
    else if (
      goal?.goal_status === "Failed" ||
      goal?.goal_status === "Failing"
    ) {
      return <MinusCircleFilled style={{ color: "#FF4D4F" }} />;
    } else {
      return null;
    }
  };

  return (
    <Card style={{ fontSize: "1rem" ,}} className="myday-card">
      <Row style={{}}>
        <Paragraph className="f-bricolage fw-600" style={{ fontSize: "1.25rem" ,margin:"0"}}>
          Goals Progress
        </Paragraph>
      </Row>
      <Flex justify="space-between" style={{margin:"1rem 0 1rem 0",width:"100%",}} vertical >
      {cardData.map((goal) => (
        <Row key={goal.id}>
          <Paragraph style={{ margin: "0rem" ,fontSize:"0.875rem"}}>
            {getGoalIcon(goal)}{" "}
            {goal.name}
          </Paragraph>
          <Progress
            percent={goal.goal_completed_percent}
            // status={goal.status}
            strokeColor={
              goal?.status === "Inactive"
                ? "#DDDEE4"
                : goal?.goal_status === "On track"
                ? "#0B9060"
                : goal?.goal_status === "At risk"
                ? "#FAAD14"
                : "#FF4D4F"
            }
            size="small"
          />
        </Row>
      ))}
      </Flex>
    </Card>
  );
};

export default GoalsCard;
