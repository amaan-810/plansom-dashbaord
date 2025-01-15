// QuickWinsCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Row, Col, } from "antd";
import {
  BulbOutlined,
  FireFilled,
  
} from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import CustomSlider from "../CustomSlider";

const QuickWinsCard = ({ cardData }) => {
  

  const tasks = cardData?.quick_wins_data;

 
  return (
    <Card className="myday-card">
      <Row justify="space-between" align="center">
        <Paragraph
          className="f-bricolage fw-600"
          style={{ fontSize: "1.25rem", margin: "0" }}
        >
          Quick Wins
        </Paragraph>
        <Paragraph className="f-sfpro">
          <FireFilled style={{ color: " #FAAD14", margin: "0" }} />
          {cardData?.streak_count}d Streak
        </Paragraph>
      </Row>

      <Row>
        <CustomSlider slides={tasks} />
      </Row>

      <Row align="center" justify='space-around' style={{marginTop: "1rem"}}>
        <Col span={19}>
          <Button
            type="default"
            shape="round"
            size="large"
            style={{
              backgroundColor: "#3100A6",
              width: "100%",
              color: "white",
            }}
            className="fw-600"
          >
            Complete Task
          </Button>
        </Col>
        <Col span={2}>
          <Button
            type="primary"
            shape="circle"
            size="large"
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "0.75rem",
            }}
            icon={<BulbOutlined />}
            className="fw-600"
          />
        </Col>
      </Row>
    </Card>
  );
};

QuickWinsCard.propTypes = {
  cardData: PropTypes.shape({
    quick_wins_data: PropTypes.arrayOf(PropTypes.object), // Assuming each task is an object
    streak_count: PropTypes.number, // Assuming streak_count is a number
  }).isRequired,
};

export default QuickWinsCard;
