import React from "react";
import { Flex, Divider } from "antd";

const STFlex = ({ children }) => {
  return (
    <>
      <Flex
        style={{ margin: "1rem 0rem", width: "100rem" }}
        justify="space-between"
      >
        {children}
      </Flex>
      <Divider style={{ margin: 0 }} />
    </>
  );
};

export default STFlex;
