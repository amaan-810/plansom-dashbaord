import React from "react";
import AppLayout from "../../../core/AppLayout";
import Background from "../components/Background";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Content } from "antd/es/layout/layout";

import { Row, Col, Flex } from "antd";

import SearchBar from "../components/search/SearchBar";
import MyDayAvatar from "../components/search/MyDayAvatar";
import MyDayCards from "../components/MyDayCards";
import MyDayTable from "../components/MyDayTable";

import "../styles/common.css";

const MyDay = () => {
  const screens = useBreakpoint();
  return (
    <AppLayout>
      <Content>
        <Background>
          <Content style={{ padding: "1rem", zIndex: "50" }}>
            <Row justify={screens.md ? "space-between" : "center"}>
              <Col lg={18} md={22} sm={24}>
                <SearchBar />
              </Col>

              {screens.md && (
                <Col lg={6} md={2}>
                  <MyDayAvatar />
                </Col>
              )}
            </Row>
            <Row className="ptb-1">
              <Col>
                <Flex>
                  <h2 className="f-bricolage fw-600 ">My Day</h2>
                </Flex>
              </Col>
            </Row>

            <MyDayCards />
          </Content>
        </Background>

        <Row style={{ padding: "1rem" }}>
          <MyDayTable />
        </Row>
      </Content>
    </AppLayout>
  );
};

export default MyDay;
