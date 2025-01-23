import React from "react";
import { Layout } from "antd";


import "../styles/common.css";
import AboutusSection from "./content/AboutusSection";
import MissionSection from "./content/MissionSection";
import FoundersSection from "./content/FoundersSection";
import BoardSection from "./content/BoardSection";
import LookingAheadSection from "./content/LookingAheadSection";
const { Content } = Layout;

const AboutUsContent = () => {
  return (
    <Content
      style={{
        marginBottom: "3rem",
        height: "100vh",
        overflow: "auto", 
      }}
    >
      <AboutusSection />

      <MissionSection />

      <FoundersSection />

      <BoardSection />

      <LookingAheadSection />

      
    </Content>
  );
};

export default AboutUsContent;
