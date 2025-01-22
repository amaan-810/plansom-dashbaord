import React from "react";
import { Layout } from "antd";
import AboutUsHeader from "../components/AboutUsHeader";
import AboutUsContent from "../components/AboutUsContent";

const AboutUs = () => {
  return (
    <Layout
      style={{
        // height: "100vh",
        width: "100vw",
        // backgroundColor: "#E8EBF7",
        
      }}
    >
      <AboutUsHeader />

      <AboutUsContent />
    </Layout>
  );
};

export default AboutUs;
