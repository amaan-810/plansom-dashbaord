
import React from "react";
import { Card, Avatar, Button, Row, Col, Flex } from "antd";
import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import stars from '../../../../assets/images/stars.svg';
const AIInsightCard = () => {

  return (
    <Card
      style={{
        backgroundColor: "#3100A6",
        color: "white", // Maintain equal aspect ratio
        display: "flex",
        flexDirection: "column", // Arrange content vertically
        justifyContent: "flex-start", // Align content to the top
       // Prevent gaps inside card
      }}
      className="myday-card"
    >
      {/* Left-aligned Row for Avatar and Text */}
      <Row align="top" gutter={[8, 8]} style={{ flexGrow: 1 }}>
        <Col>
          <Avatar size={44} icon={<UserOutlined />} />
        </Col>
        <Col>
          <p className="f-sfpro" style={{ marginBottom: 0,fontSize:"1.5rem",fontWeight:"600" }}>AI Coach</p>
          <p className="f-sfpro" style={{ fontSize: "1.375", fontWeight: "lighter", marginBottom: 0 }}>
            Insight for today
          </p>
        </Col>
      </Row>

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
