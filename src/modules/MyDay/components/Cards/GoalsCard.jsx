
import React from "react";
import PropTypes from "prop-types";
import { Card, Flex, Progress, Row } from "antd";
import {
  RocketFilled,
  WarningFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";

const GoalsCard = ({ cardData = [] }) => {
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

  const getStrokeColor = (goal) => {
    if (goal?.status === "Inactive") {
      return "#DDDEE4";
    } else if (goal?.goal_status === "On track") {
      return "#0B9060";
    } else if (goal?.goal_status === "At risk") {
      return "#FAAD14";
    } else {
      return "#FF4D4F";
    }
  };

  return (
    <Card style={{ fontSize: "1rem" ,}} className="myday-card">
      <Row>
        <Paragraph
          className="f-bricolage fw-600"
          style={{ fontSize: "1.25rem", margin: "0" }}
        >
          Goals Progress
        </Paragraph>
      </Row>
      {Array.isArray(cardData) && cardData.length > 0 ? (
        <Flex
          justify="space-between"
          style={{ margin: "1rem 0 1rem 0", width: "100%" }}
          vertical
        >
          {cardData.map((goal) => (
            <Row key={goal.id}>
              <Paragraph style={{ margin: "0rem", fontSize: "0.875rem" }}>
                {getGoalIcon(goal)} {goal.name}
              </Paragraph>
              <Progress
                percent={goal.goal_completed_percent}
                strokeColor={getStrokeColor(goal)}
                size="small"
              />
            </Row>
          ))}
        </Flex>
      ) : (
        <Paragraph>No goals available</Paragraph>
      )}
    </Card>
  );
};

GoalsCard.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      goal_status: PropTypes.string.isRequired,
      goal_completed_percent: PropTypes.number.isRequired,
      status: PropTypes.string,
    })
  ),
};

export default GoalsCard;
