import React from "react";
import { Row,Col, Layout } from "antd";
import AboutUsHeader from "../components/AboutUsHeader";
import AboutUsContent from "../components/AboutUsContent";

const AboutUs = () => {
  return (
    <Layout
      style={{
        // height: "100vh",
        width: "100vw",
        height:"100%",
        // backgroundColor: "#E8EBF7",
        position: "fixed"
      }}
    >
      <Row >
        <Col span={24}>
      <AboutUsHeader />

      <AboutUsContent />
      </Col>
      </Row>
    </Layout>
  );
};

export default AboutUs;
