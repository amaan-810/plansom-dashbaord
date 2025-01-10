// QuickWinsCard.jsx
import React from "react";
import { Card, Button, Row, Col, Carousel, Flex, Space } from "antd";
import { BulbOutlined, FireFilled,RightOutlined,LeftOutlined } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import "../../../../assets/styles/antdOveride.css"
import left from "../../../../assets/images/leftarrow.svg"
import CustomSlider from "../CustomSlider";

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
      {/* <div style={{backgroundColor:"white"}}>
        <p>Update Social Media Profile</p>
        <Carousel arrows infinite={false} dots={false} style={{ height: "8rem" }}  
        prevArrow={<img src={left} alt="" />}
        nextArrow={<img src={left} alt="" />}
        >

          {tasks.map((item) => (
            <div key={item.id}>
              <div
                style={{
                  height: "8rem",
                  lineHeight: "160px",
                  textAlign: "center",
                }}
              >
                {item.task.name}
              </div>
            </div>
          ))}
        </Carousel>
      </div> */}
      <Row>
          <CustomSlider slides={tasks}/>
      </Row>

      <Row align="center">
        <Col span={19}>
        <Button
          type="default"
          style={{
            backgroundColor: "#3100A6",
            width:"100%",
            color: "white",
            borderRadius: "1.5rem",
            fontWeight: "bold",
            padding: "1rem 2rem 1rem 2rem",
          }}
        >
          
          Complete Task
        </Button>
        </Col>
        <Col>
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

export default QuickWinsCard;
