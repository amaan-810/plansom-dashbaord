import React from "react";
import { Row, Col, Typography, Image, Card ,Flex} from "antd";
import { LinkedinFilled } from "@ant-design/icons";
import getDynamicPadding from "../../config/paddingUtility";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Title, Paragraph, Text } = Typography;

import bd1 from "../../assets/bd1.svg";
import bd2 from "../../assets/bd2.svg";

const BoardSection = () => {
  const screens = useBreakpoint();
  return (
    <Row
      style={{
        padding: getDynamicPadding(screens),
        width: "100%",
        background: "linear-gradient(63.02deg, rgb(255, 255, 255) 12.86%, rgb(255, 255, 255) 52.92%, rgb(220, 215, 255) 103.25%)",

      }}
    >
      <Row
        align="middle"
        justify="center"
        style={{ width: "100%", padding: "0" }}
      >
        <Col span={24}>

          <Paragraph style={{ textAlign: "center",fontWeight:"600",fontSize: !screens.lg ? "1.75rem" : "2.375rem" }}>
            <span
              style={{ fontFamily: "Bricolage Grotesque", color: "#05060E" }}
            >
              Meet our
            </span>{" "}
            <span
              style={{ fontFamily: "Bricolage Grotesque", color: "#1D3BAF" }}
            >
              Board of Directors
            </span>
          </Paragraph>
        </Col>
      </Row>

      <Row
        gutter={[16, 16]}
        justify="space-around"
        style={{
          margin: 0,
          width: "100%",
          display: "flex", 
          alignItems: "stretch", 
        }}
      >
        <Col sm={24} md={11} style={{ display: "flex" }}>
          <Card style={{ flex: 1 }}>
            <Row align="middle">
              <Col md={6}>
                <Image src={bd1} alt="" preview={false} />
              </Col>
              <Col md={18} style={{ padding: !screens.md ? " 1rem 0": "1rem" }}>
              <Flex vertical>
                <Text
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: "600",
                    fontSize: "1.75rem",
                  }}
                >
                  Patrick Scully
                </Text>
                <Text
                  style={{
                    color: "#193295",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                  }}
                >
                  Non-Executive Director
                </Text>
                </Flex>
              </Col>
            </Row>
            <Row
              style={{
                padding: "1rem 0rem",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <Paragraph style={{ color: "#565C76",paddingBottom:"2rem" }}>
                Patrick brings over 25 years of experience as a business leader,
                having played pivotal roles in scaling operations within the
                software, technology, and media sectors. Currently, he serves as
                Vice President of APJ & EMEA Commercial Finance & Operations at
                Coupa Software, where he drives revenue growth, optimises the
                P&L and improves operational efficiency across international
                markets. Patrick’s expertise spans commercial strategy,
                structure, scaling and international business expansion, making
                him a key contributor to Plansom's vision of empowering
                professionals to achieve meaningful goals.
              </Paragraph>
            </Row>
            <Row>
              <a
                href="https://www.linkedin.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                  color: "#0a66c2",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <LinkedinFilled
                  style={{ marginRight: "0.5rem", fontSize: "1.25rem" }}
                />{" "}
                LinkedIn
              </a>
            </Row>
          </Card>
        </Col>

        <Col sm={24} md={11} style={{ display: "flex" }}>
          <Card style={{ flex: 1 }}>
            <Row align="middle">
              <Col md={6}>
                <Image src={bd2} alt="" preview={false} />
              </Col>
              <Col md={18} style={{ padding: !screens.md ? " 1rem 0": "1rem"}}>
              <Flex vertical>
                <Text
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: "600",
                    fontSize: "1.75rem",
                  }}
                >
                  Eric Paulak
                </Text>
                <Text
                  style={{
                    color: "#193295",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                  }}
                >
                  Non-Executive Director
                </Text>
                </Flex>
              </Col>
            </Row>
            <Row
              style={{
                padding: "1rem 0rem",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            ><Typography>
              <Paragraph style={{ color: "#565C76" }}>
                Eric is a seasoned business leader with almost 40 years of
                experience, 28 of which were at Gartner, where he held various
                executive leadership roles, including as Senior Vice President
                leading global client interaction services. Eric led global
                teams that provided critical research and advisory services to
                senior IT leaders and technical professionals, significantly
                enhancing client satisfaction and business value. Eric also
                spent 23 years in the United States Army Reserve, leading
                logistics and public affairs operations. His expertise in IP
                development, global operations, and emerging technologies makes
                him a valuable contributor to Plansom’s mission of driving
                meaningful impact through innovative solutions.
              </Paragraph>
              
              </Typography>
            </Row>
            <Row>
              <a
                href="https://www.linkedin.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                  color: "#0a66c2",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <LinkedinFilled
                  style={{ marginRight: "0.5rem", fontSize: "1.25rem" }}
                />{" "}
                LinkedIn
              </a>
            </Row>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};

export default BoardSection;
