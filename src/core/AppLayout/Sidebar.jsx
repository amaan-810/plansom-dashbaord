import React from "react";
import PropTypes from "prop-types";
import { Flex, Button, Menu, Avatar } from "antd";
import {
  UnorderedListOutlined,
  AimOutlined,
  MessageOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  UserOutlined,
  SunOutlined
} from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/antdmenu.css";

const items = [
  {
    key: "1",
    icon: <SunOutlined />,
    label: "My Day",
    className: "sidebar-menu-item", // Apply custom class
  },
  {
    key: "2",
    icon: <AimOutlined />,
    label: "Goals",
    className: "sidebar-menu-item", // Apply custom class
  },
  {
    key: "3",
    icon: <UnorderedListOutlined />,
    label: "Tasks",
    className: "sidebar-menu-item", // Apply custom class
  },
  {
    key: "4",
    icon: <MessageOutlined />,
    label: "Messages",
    className: "sidebar-menu-item", // Apply custom class
  },
  {
    key: "5",
    icon: <CalendarOutlined />,
    label: "Calendar",
    className: "sidebar-menu-item", // Apply custom class
  },
  {
    key: "6",
    icon: <ClockCircleOutlined />,
    label: "Track",
    className: "sidebar-menu-item", // Apply custom class
  },
];

const Sidebar = ({ closeSidebar }) => {
  const screens = useBreakpoint();
  return (
    <Flex vertical>
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
              overflow: "hidden",
            }}
          >
            <Button
              icon={<CloseOutlined />}
              type="text"
              onClick={closeSidebar}
            />

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

      <div
        style={{ margin: !screens.md ? "0 1rem 0 1rem" : "1rem 1rem 0 1rem" }}
      >
        <Menu
          mode="inline"
          style={{
            fontSize: !screens.md ? "1.125rem" : "1rem",
            border: "none",
          }}
          items={items} // Use `items` prop
        />
        {/* </Col> */}
      </div>
    </Flex>
  );
};

Sidebar.propTypes = {
  closeSidebar: PropTypes.func,
};

export default Sidebar;
