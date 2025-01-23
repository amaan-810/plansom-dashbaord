import React from "react";
import { Row, Col, Typography, Image } from "antd";
import getDynamicPadding from "../../config/paddingUtility";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
const { Title, Paragraph, Text } = Typography;

import mission from "../../assets/mission.svg";

const MissionSection = () => {
  const screens = useBreakpoint();
  return (
    <Row
      gutter={[16, 16]}
      align="middle"
      style={{
        padding: getDynamicPadding(screens),
        margin: 0,
        width: "100%",
        background:
          "linear-gradient(65deg, rgba(125, 105, 255, 0.10) -17.44%, rgba(255, 255, 255, 0.50) 28.03%)",
      }}
    >
      <Col
        xs={24}
        md={12}
        style={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          padding: "1rem",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <Image src={mission} alt="" preview={false} />
      </Col>
      <Col
        xs={24}
        md={12}
        style={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          padding: "1rem",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <Typography style={{ textAlign: !screens.md ? "center" : "left" }}>
          <Text
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: "600",
              fontSize: !screens.lg ? "1.75rem" : "2.375rem",
            }}
          >
            Mission
          </Text>
          <Paragraph style={{ color: "#565C76" }}>
            To help individuals efficiently accomplish their tasks and feel in
            control by providing personalised guidance and accountability.
          </Paragraph>
          <Title
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: "600",
              fontSize: !screens.lg ? "1.75rem" : "2.375rem",
            }}
          >
            Vision
          </Title>
          <Paragraph style={{ color: "#565C76" }}>
            To transform the way people work and create a world where everyone
            can effortlessly achieve their goals and enjoy a fulfilling,
            balanced life.
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export default MissionSection;
