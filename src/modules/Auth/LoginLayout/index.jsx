import React from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col, Card } from "antd";
import { Content } from "antd/es/layout/layout";
import "../styles/layout.css";
import loginBanner from "../../../assets/images/loginBanner.png";


const LoginLayout = ({ children }) => {
  return (
    <Layout
      className="gradient-background"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <Content>
        <Row
          justify="space-around"
          align="middle"
          style={{ minHeight: "100vh" }}
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            // style={{ padding: "2rem" }}
          >
            {/* {!screens.lg && <MobileLoginHeader/>} */}

            {children}
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={12}
            xl={12}
            style={{ height: "100vh", padding: "1rem" }}
          >
            <Card
              style={{
                backgroundImage: `url(${loginBanner})`,
              }}
              className="side-image"
            >
              {/* <img src={loginBanner} alt="" className="side-image"/> */}
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};

export default LoginLayout;
