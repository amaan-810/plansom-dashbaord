import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import stars from "./../assets/star1.svg";
import Lorem from "./Lorem";
import mission from "../assets/mission.svg";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const AboutUsContent = () => {
  const screens = useBreakpoint();
  return (
    <Content
      style={{
        marginTop: "5rem",
        overflowX: "hidden",
      }}
    >

      <Row
        style={{
          //   height: "28rem",
          padding: !screens.lg
            ? !screens.md
              ? "2rem 1rem"
              : " 2rem 2rem "
            : "2rem 6.25rem",
          backgroundColor: "#E8EBF7",
          boxSizing: "border-box",
        }}
        align="middle"
      >
        <Col
          xs={24}
          md={12}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            // padding: "1rem", // Ensure inner padding for text
            boxSizing: "border-box",
          }}
        >
          <Typography>
            <Title className="f-bricolage">About Us</Title>
            <Paragraph className="aboutus-paragraph-style">
              At Plansom, we make achieving your goals simple and stress-free.
              Built to tackle the chaos of endless tasks and overwhelming
              priorities, Plansom helps you create clear, actionable plans in
              minutes.
            </Paragraph>
            <Paragraph className="aboutus-paragraph-style">
              Whether you’re looking to grow your business, streamline your day,
              or simply get unstuck, we’re here to guide you every step of the
              way. With Plansom, it’s not just about planning—it’s about making
              progress.
            </Paragraph>
            <Paragraph className="aboutus-paragraph-style">
              Let’s get started!
            </Paragraph>
          </Typography>
        </Col>
        {/* <Col span={4}></Col>
         <Col span={2} style={{ padding: "" }}>
           {" "}
           <Image
             style={{ marginBottom: "-500px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col>
         <Col span={4}>
           {" "}
           <Image
             style={{ marginTop: "-45px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col>
         <Col span={1}>
           {" "}
           <Image
             style={{ marginBottom: "-371px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col>
         <Col span={1}>
           {" "}
           <Image
             style={{ marginBottom: "-228px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col> */}
      </Row>
      
      <Row
        style={{
          padding: !screens.lg
            ? !screens.md
              ? "2rem 1rem"
              : " 2rem 2rem "
            : "2rem 6.25rem",
          backgroundColor:
            "linear-gradient(65deg, rgba(125, 105, 255, 0.10) -17.44%, rgba(255, 255, 255, 0.50) 28.03%), #FFF",
        }}
        align="middle"
      >
        <Col xs={24} md={12}>
          <Image src={mission} alt="" />
        </Col>
        <Col xs={24} md={12}>
          <Typography style={{ textAlign: !screens.md ? "center" : "left" }}>
            <Title>Mission</Title>
            <Paragraph className="aboutus-paragraph-style">
              To help individuals efficiently accomplish their tasks and feel in
              control by providing personalised guidance and accountability.
            </Paragraph>
            <Title>Vision</Title>
            <Paragraph className="aboutus-paragraph-style">
              To transform the way people work and create a world where everyone
              can effortlessly achieve their goals and enjoy a fulfilling,
              balanced life.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      
    </Content>
  );
};

export default AboutUsContent;
