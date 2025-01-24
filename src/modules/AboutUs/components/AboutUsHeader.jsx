import React from "react";
import { Layout, Button, Row, Col, Image, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/logo.svg";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const AboutUsHeader = () => {
  const screens = useBreakpoint();

  return (
    <Row
      style={{
        position: "fixed",
        padding: !screens.lg
          ? !screens.md
            ? "1rem 1rem"
            : " 1rem 2rem "
          : "1rem 6.25rem",
        width: "100%",
        zIndex: 1000,
        minHeight: "5rem",
        backgroundColor: "#E8EBF7",
       
      }}
    >
      <Row justify="space-between" align="middle" style={{ width: "100%" }}>
        <Col xs={10} sm={10} md={6} lg={3} xl={3}>
          <Image
            style={{ width: "8rem", height: "2rem" }}
            src={logo}
            preview={false}
          />
        </Col>

        <Col xs={0} sm={0} md={7} lg={10} xl={12}>
          <Button type="text" size="large" className="fw-600">
            About Us
          </Button>
          <Button type="text" size="large" className="fw-600">
            Pricing
          </Button>
        </Col>

        <Col xs={0} sm={0} md={8} lg={7} xl={5}>
          <Button type="text" size="large" className="fw-600">
            Login
          </Button>
          <Button
            type="defalut"
            size="large"
            className="fw-600"
            shape="round"
            style={{ backgroundColor: "#1D3BAF", color: "white" }}
          >
            Try it FREE
          </Button>
        </Col>

        <Col xs={4} sm={4} md={0} lg={0}>
          <Flex align="middle" justify="center">
            <Button shape="circle" type="default" size="large" icon={<MenuOutlined />} style={{backgroundColor:"#DDDEE4"}} />
          </Flex>
        </Col>
      </Row>
    </Row>
  );
};

export default AboutUsHeader;
