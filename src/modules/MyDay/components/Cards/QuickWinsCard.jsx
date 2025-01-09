// QuickWinsCard.jsx
import React from "react";
import { Card, Button, Row, Carousel, Flex, Space } from "antd";
import { BulbOutlined, FireFilled } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";

const QuickWinsCard = ({ cardData }) => {
  console.log(cardData.quick_wins_data);
  console.log(cardData.quick_wins_data[1].task.name);
  // const quick_wins_data=cardData?.quick_wins_data;

  const tasks = cardData.quick_wins_data;

  const contentStyle = {
    margin: 0,
    height: "10rem",
    textAlign: "center",
  };
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
      <div>
        <p>Update Social Media Profile</p>
        <Carousel arrows infinite={false} dots={false} style={{ height: "8rem" }}>

          {tasks.map((item) => (
            <div key={item.id}>
              <h3
                style={{
                  height: "160px",
                  lineHeight: "160px",
                  textAlign: "center",
                  background: "#364d79",
                  color: "#fff",
                }}
              >
                {item.task.name}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>

      <Row align="center" justify="space-between">
        <Button
          type="default"
          style={{
            backgroundColor: "#3100A6",
            color: "white",
            borderRadius: "1.5rem",
            fontWeight: "bold",
            padding: "1rem 2rem 1rem 2rem",
          }}
        >
          Complete Task
        </Button>
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
      </Row>
    </Card>
  );
};

export default QuickWinsCard;
