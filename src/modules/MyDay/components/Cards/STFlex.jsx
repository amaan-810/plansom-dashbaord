import React from "react";
import PropTypes from "prop-types";
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

STFlex.propTypes={
  children: PropTypes.node,
}

export default STFlex;
