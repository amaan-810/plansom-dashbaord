import React from "react";
import { Row, Col, Flex } from "antd";
import "../styles/background.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import PropTypes from "prop-types";

const Background = ({ children }) => {
  const screens = useBreakpoint();
  return (
    <div className="background-wrapper">
      <div className="gradient-section" style={{height:screens.lg ? "80%" : "100%" }} />
      <div className="content-section">{children}</div>
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
