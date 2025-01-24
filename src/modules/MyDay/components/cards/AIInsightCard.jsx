import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Button, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { UserOutlined } from "@ant-design/icons";
import stars from "../../../../assets/images/stars.svg";
import ai_image from "../../../../assets/images/ai_image.jpg";

const AIInsightCard = ({ cardData }) => {
  return (
    <Card className="myday-card ai-card">
      <Flex align="top" gutter={[8, 8]} style={{ flexGrow: 1 }} gap="middle">
        <Flex align="center">
          <Avatar
            src={ai_image}
            style={{ width: "2.75rem", height: "2.75rem" }}
            icon={<UserOutlined />}
          />
        </Flex>
        <Flex vertical>
          <Paragraph
            className="f-sfpro fw-600"
            style={{
              marginBottom: 0,
              fontSize: "1rem",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            AI Coach
          </Paragraph>
          <Paragraph
            className="f-sfpro"
            style={{
              marginBottom: 0,
              fontSize: "0.875rem",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Insight for today
          </Paragraph>
        </Flex>
      </Flex>

      {/* Left-aligned Bold Text */}
      <Paragraph
        className="f-bricolage scrollbar-hidden"
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          margin: "1rem 0 1rem 0",
          color: "white",
          height: "8rem",
          overflow: "auto",
        }}
      >
        {/* Your <span style={{ color: "yellow" }}>time management</span> improved
        last week! */}
        {cardData}
      </Paragraph>

      {/* Button at the bottom with no additional margin */}
      <Button
      size="large"
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "1.5rem",
          fontWeight: "bold",
          // padding: "1.5rem",
          alignSelf: "flex-start", // Align button to the left
        }}
      >
        {<img src={stars} alt="" />}
        Explore my stats
      </Button>

      {/* <Flex style={{ paddingTop: "1.5rem" }}>
        <Button
          icon={<LeftOutlined />}
          type="text"
          iconPosition="start"
          style={{ color: "white" }}
        ></Button>
        <Button
          icon={<RightOutlined />}
          type="text"
          iconPosition="start"
          style={{ color: "white" }}
        ></Button>
      </Flex> */}
    </Card>
  );
};

AIInsightCard.propTypes = {
  cardData: PropTypes.string,
};

export default AIInsightCard;
