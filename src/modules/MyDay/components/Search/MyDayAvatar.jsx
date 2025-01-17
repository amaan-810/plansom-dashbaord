import React from "react";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Flex, Avatar, Button } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import getDecryptAuthData from "../../../../core/Utils/encryption/getDecryptAuthData";

const MyDayAvatar = () => {

  const authData=getDecryptAuthData();

  const screens = useBreakpoint();
  return (
    <Flex
      align="center"
      justify="flex-end"
      style={{
        paddingLeft: screens.lg && "1rem",
        position: "relative",
      }}
    >

      <Avatar
        size={{ md: 38, lg: 38, xl: 38,xxl: 40}}
        icon={<UserOutlined />}
        style={{ backgroundColor: "gray", cursor: "pointer" }}
      />
      

      {screens.lg && (
        <Button
          style={{ fontWeight: "600" }}
          type="text"
          icon={<DownOutlined />}
          iconPosition="end"
          variant="text"
          size="large"
        >
          {authData?.data?.first_name}
        </Button>
      )}
    </Flex>
  );
};

export default MyDayAvatar;
