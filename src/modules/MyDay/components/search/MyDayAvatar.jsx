import React from "react";
import {
  UserOutlined,
  DownOutlined,
  ApartmentOutlined,
  ProfileOutlined,
  MessageTwoTone,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Flex, Avatar, Button, Dropdown } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import getDecryptAuthData from "../../../../core/Utils/encryption/getDecryptAuthData";
import Text from "antd/es/typography/Text";

const MyDayAvatar = () => {
  const authData = getDecryptAuthData();
  const screens = useBreakpoint();

  // Define the dropdown items
  const items = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "organization",
      label: "Organization",
      icon: <ApartmentOutlined />,
    },
    {
      key: "templates",
      label: "Templates",
      icon: <ProfileOutlined />,
    },
    {
      key: "contact",
      label: "Contact Us",
      icon: <MessageOutlined />,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "profile":
        console.log("Profile clicked");
        break;
      case "organization":
        console.log("Organization clicked");
        break;
      case "templates":
        console.log("Templates clicked");
        break;
      case "contact":
        console.log("Contact Us clicked");
        break;
      case "logout":
        console.log("Logout clicked");
        break;
      default:
        break;
    }
  };

  // console.log(authData?.data)

  return (
    <Flex
      align="center"
      justify="flex-end"
      style={{
        paddingLeft: screens.lg && "1rem",
        position: "relative",
      }}
    >
      {/* <Avatar
        src={authData?.data?.profile_picture || undefined} // Set src dynamically
        icon={!authData?.data?.profile_picture && <UserOutlined />}
        size={{ md: 38, lg: 38, xl: 38, xxl: 40 }}
        //icon={<UserOutlined />}
        style={{ backgroundColor: "gray", cursor: "pointer" }}
      /> */}

      {screens.lg && (
        <Dropdown
          menu={{
            items, // Provide items to the dropdown
            onClick: handleMenuClick, // Handle menu item clicks
          }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Button
            style={{ fontWeight: "600" }}
            type="text"
            icon={<DownOutlined />}
            size="large"
            iconPosition="end"
          >
            <Avatar
              src={authData?.data?.profile_picture || undefined} // Set src dynamically
              icon={!authData?.data?.profile_picture && <UserOutlined />}
              size={{ md: 38, lg: 38, xl: 38, xxl: 40 }}
              //icon={<UserOutlined />}
              style={{ backgroundColor: "gray", cursor: "pointer" }}
            />
            <Text>{authData?.data?.first_name}</Text>
          </Button>
        </Dropdown>
      )}
    </Flex>
  );
};

export default MyDayAvatar;
