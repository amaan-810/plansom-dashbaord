import { Flex } from 'antd'
import React from 'react'
import loginBanner from "../../../assets/images/loginBanner.png";

const MobileLoginHeader = () => {
  return (
    <Flex
    justify="space-between"
    align="center"
    style={{
      background: "white",
      position: "fixed",
      width: "100%",
        zIndex: 500,
      height: "6rem",
      overflow:"auto",
      borderBottom: "1px solid #ddd",
    }}
  >




    <div
      style={{
        backgroundImage: `url(${loginBanner})`,
        display: "inline-block",
        height: "100%",
        width: "100%",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </Flex>
  )
}

export default MobileLoginHeader
