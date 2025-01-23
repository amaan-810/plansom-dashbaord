import React from "react";
import { Row, Col, Layout } from "antd";
import AboutUsHeader from "../components/AboutUsHeader";
import AboutUsContent from "../components/AboutUsContent";

const AboutUs = () => {
  return (
    <Layout
      style={{
        width: "100vw",
        height: "100%",
        position: "fixed",
      }}
    >
      <Row>
        <Col span={24}>
          <AboutUsHeader />

          <AboutUsContent />
        </Col>
      </Row>
    </Layout>
  );
};

export default AboutUs;
