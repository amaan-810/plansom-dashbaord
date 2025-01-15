// MobileHeader.jsx
import React from "react";
import PropTypes from 'prop-types';
import { Button, Flex, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.svg";

const MobileHeader = ({ toggleSidebar }) => (
  <Flex
    justify="space-between"
    align="center"
    style={{
      background: "white",
      padding: "0.5rem 1rem",
      position: "fixed",
      width: "100%",
        zIndex: 500,
      height: "4rem",
      overflow:"auto",
      borderBottom: "1px solid #ddd",
    }}
  >


    <div
      style={{
        backgroundImage: `url(${logo})`,
        display: "inline-block",
        height: "2rem",
        width: "8rem",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </Flex>
);

MobileHeader.propTypes = {
  toggleSidebar: PropTypes.func
}


export default MobileHeader;
