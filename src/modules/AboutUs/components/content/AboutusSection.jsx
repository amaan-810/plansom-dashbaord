import React from "react";
import { Row, Col, Typography, Image, Flex } from "antd";
import getDynamicPadding from "../../config/paddingUtility";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
const { Title, Paragraph, Text } = Typography;
import stars from "../../assets/star1.svg";
import stars2 from "../../assets/star2.svg";

const AboutusSection = () => {
  const screens = useBreakpoint();
  return (
    <Row
      align="middle"
      style={{
        marginTop: "5rem",
        padding: getDynamicPadding(screens),
        width: "100%",
        background: "#E8EBF7",
      }}
    >
      <Col
        xs={24}
        md={14}
        lg={16}
        style={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          padding: "1rem",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <Typography>
          <Text style={{fontFamily: "Bricolage Grotesque" ,fontWeight:"600",fontSize: "2.375rem",}}>About Us</Text>
          <Paragraph style={ {color:"#565C76"}}>
            At Plansom, we make achieving your goals simple and stress-free.
            Built to tackle the chaos of endless tasks and overwhelming
            priorities, Plansom helps you create clear, actionable plans in
            minutes.
          </Paragraph>
          <Paragraph style={ {color:"#565C76"}}>
            Whether you’re looking to grow your business, streamline your day,
            or simply get unstuck, we’re here to guide you every step of the
            way. With Plansom, it’s not just about planning—it’s about making
            progress.
          </Paragraph>
          <Paragraph  style={ {color:"#565C76",fontWeight:"600"}} >Let’s get started!</Paragraph>
        </Typography>
      </Col>
      <Col
        xs={24}
        md={10}
        lg={8}
        style={{
          height: "100%",
          maxWidth: "100%",
          position : !screens.md && "relative",
          bottom : !screens.md && "4rem"
        }}
      >
        <Flex
          align="middle"
          justify={!screens.md ? "flex-end" : "center"}
          style={{ width: "100%", height: "100%" }}
        >
          <Row style={{width:!screens.md && "40%", height : !screens.md && "2rem"
            // position:'relative', bottom :"4rem"
            }}>
            <Image
              src={!screens.md ? stars2 : stars}
              alt=""
              preview={false}
              
            />
          </Row>
        </Flex>
      </Col>
    </Row>
  );
};

export default AboutusSection;
