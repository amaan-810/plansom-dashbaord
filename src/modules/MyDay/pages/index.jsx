import React from "react";
import AppLayout from "../../../core/AppLayout";
import Background from "../components/Background";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Content } from "antd/es/layout/layout";
import Lorem from "../components/Lorem";
import { Row, Col, Flex } from "antd";

import SearchBar from "../components/Search/SearchBar";
import MyDayAvatar from "../components/Search/MyDayAvatar";
import MyDayCards from "../components/MyDayCards";
import MyDayTable from "../components/Table/MyDayTable";

const MyDay = () => {
  const screens = useBreakpoint();
  return (
    <AppLayout>
      <Content style={{position:"relative"}}>
        <Background>
        <Content style={{ padding: "1rem" }}>
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
          {/* <Row>
            Content
            <Lorem />
          </Row> */}

          <MyDayCards />
        </Content>
        <Row justify="center">
        {screens.lg && <Col span={23}>
        <MyDayTable/>
        </Col>
        }
          
        </Row>
        </Background>
        
      </Content>
    </AppLayout>
  );
};

export default MyDay;
