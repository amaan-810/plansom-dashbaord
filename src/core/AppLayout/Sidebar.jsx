import React from "react";
import PropTypes from 'prop-types';
import { Flex, Button, Menu, Avatar } from "antd";
import {
  UnorderedListOutlined,
  AimOutlined,
  MessageOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/antdOveride.css";

const Sidebar = ({ closeSidebar }) => {
  const screens = useBreakpoint();
  return (
    <Flex vertical >
      {!screens.md ? (
        <div>
          <Flex
            justify="space-between"
            align="center"
            style={{
              background: "white",
              padding: "0.5rem 1rem",
              maxwidth: "100%",
              height: "4rem",
              overflow:"hidden"
            }}
          >
          <Button icon={<CloseOutlined />} type="text" onClick={closeSidebar} />

          <div
            style={{
              backgroundImage: `url(${logo})`,
              display: "inline-block",
              height: "2rem",
              width: "8rem",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <Avatar
            size={35}
            icon={<UserOutlined />}
            style={{ backgroundColor: "gray", cursor: "pointer" }}
          />
          </Flex>
        </div>
      ) : (
        <div>
          <img
            style={{
              height: "65%",
              width: "65%",
              padding: "0",
              margin: "1.5rem 1rem 0.5rem 1rem",
            }}
            src={logo}
            alt="logo"
          />
        </div>
      )}

      {/* Menu Row */}
      <div style={{ margin: !screens.md ? "0 1rem 0 1rem":"1rem 1rem 0 1rem" }}>
        {/* <Col span={24} style={{}}> */}
        <Menu
          mode="inline"
          style={{
            fontSize: `1rem`,
            //   width: "12.5rem",
            border: "none",
          }}
        >
          <Menu.Item
            key="1"
            icon={<UnorderedListOutlined />}
            className="sidebar-menu-item"
          >
            My Day
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<AimOutlined />}
            className="sidebar-menu-item"
          >
            Goals
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<MessageOutlined />}
            className="sidebar-menu-item"
          >
            Messages
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<CalendarOutlined />}
            className="sidebar-menu-item"
          >
            Calendar
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<ClockCircleOutlined />}
            className="sidebar-menu-item"
          >
            Track
          </Menu.Item>
        </Menu>
        {/* </Col> */}
      </div>
    </Flex>
  );
};

Sidebar.propTypes = {
 closeSidebar: PropTypes.func
}

export default Sidebar;

