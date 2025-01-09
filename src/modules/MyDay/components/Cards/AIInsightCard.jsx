
import React from "react";
import { Card, Avatar, Button, Row, Col, Flex } from "antd";
import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import stars from '../../../../assets/images/stars.svg';
import ai_image from "../../../../assets/images/ai_image.jpg"
const AIInsightCard = () => {

  return (
    <Card
      style={{
        backgroundColor: "#3100A6",
        color: "white", 
        display: "flex",
        flexDirection: "column", 
        justifyContent: "flex-start", 
      }}
      className="myday-card"
    >
      <Flex align="top" gutter={[8, 8]} style={{ flexGrow: 1 }}>
        <Flex align="center" >
          <Avatar src={ai_image} style={{width:"2.75rem",height:"2.75rem"}} icon={<UserOutlined />} />
        </Flex>
        <Col>
          <p className="f-sfpro" style={{ marginBottom: 0,fontSize:"1.5rem",fontWeight:"600" }}>AI Coach</p>
          <p className="f-sfpro" style={{ fontSize: "1.375", fontWeight: "lighter", marginBottom: 0 }}>
            Insight for today
          </p>
        </Col>
      </Flex>

      {/* Left-aligned Bold Text */}
      <p className="f-bricolage" style={{ fontSize: "1.75rem", fontWeight: "600", margin: "1rem 0 1.5rem 0" }}>
        Your <span style={{ color: "yellow" }}>time management</span> improved
        last week!
      </p>

      {/* Button at the bottom with no additional margin */}
      <Button
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "1.5rem",
          fontWeight: "bold",
          padding: "1.5rem",
          alignSelf: "flex-start", // Align button to the left
        }}
      >
        <img src={stars} alt=""/>Explore my stats
      </Button>

      <Flex style={{paddingTop: "1.5rem"}}>
      <Button icon={<LeftOutlined />} type="text" iconPosition="start" style={{color:"white"}}></Button>
      <Button icon={<RightOutlined />} type="text" iconPosition="start"style={{color:"white"}} ></Button>
      </Flex>
    </Card>
  );
};

export default AIInsightCard;
