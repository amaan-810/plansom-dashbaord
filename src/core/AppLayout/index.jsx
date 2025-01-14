import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

const AppLayout = ({ children }) => {
  const screens = useBreakpoint();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const closeSidebar = () => setSidebarVisible(false);




  return (
    <Layout
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      <Row style={{  width: "100%" }}>
        <Col
          xs={sidebarVisible ? 24 : 0}
          sm={8}
          md={8}
          lg={5}
          xl={4}
          // style={{ border: "1px solid blue" }}
        >
          <Sider
            trigger={null}
            theme="light"
            width={"100%"}
            style={{
              height: "100%",
              display: !screens.md && !sidebarVisible && "none" ,
            }}
          >
            <Sidebar
              toggleSidebar={toggleSidebar}
              sidebarVisible={sidebarVisible}
              closeSidebar={closeSidebar}
            />
          </Sider>

        </Col>
        <Col
          xs={sidebarVisible ? 0 : 24}
          sm={sidebarVisible ? 0 : 24}
          md={16}
          lg={19}
          xl={20}
          style={{overflow:"auto",height:"100vh"}}

        >
          <Layout
          >
            {!screens.md && !sidebarVisible && (
              <MobileHeader toggleSidebar={toggleSidebar} />
            )}
            {children}
          </Layout>
        </Col>
      </Row>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
