// QuickWinsCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Row, Col, } from "antd";
import {
  BulbOutlined,
  FireFilled,
  
} from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import "../../../../assets/styles/antdOveride.css";
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
            style={{
              backgroundColor: "#3100A6",
              width: "100%",
              color: "white",
              borderRadius: "1.5rem",
              fontWeight: "bold",
              padding: "1rem 2rem 1rem 2rem",
            }}
          >
            Complete Task
          </Button>
        </Col>
        <Col span={2}>
          <Button
            type="primary"
            shape="circle"
            style={{
              backgroundColor: "white",
              color: "grey",
              borderRadius: "50%",
              fontWeight: "bold",
              padding: "0.75rem",
            }}
            icon={<BulbOutlined />}
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
