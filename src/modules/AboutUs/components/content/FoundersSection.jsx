import React from "react";
import { Row, Col, Typography, Card } from "antd";
import { LinkedinFilled } from "@ant-design/icons";
import getDynamicPadding from "../../config/paddingUtility";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
const { Title, Paragraph, Text } = Typography;

import founder1 from "../../assets/founder1.svg";
import founder2 from "../../assets/founder2.svg";

const FoundersSection = () => {
  const screens = useBreakpoint();
  return (
    <Row
      style={{
        padding: getDynamicPadding(screens),
        width: "100%",
        background: "#F7F8FC",
        rowGap: "1rem",
      }}
    >
      <Row
        align="middle"
        justify="center"
        style={{ width: "100%", padding: "0" }}
      >
        <Col span={24}>
          <Paragraph
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: !screens.lg ? "1.75rem" : "2.375rem",
            }}
          >
            <span
              style={{ fontFamily: "Bricolage Grotesque", color: "#05060E" }}
            >
              Meet the
            </span>{" "}
            <span
              style={{ fontFamily: "Bricolage Grotesque", color: "#1D3BAF" }}
            >
              Founders
            </span>
          </Paragraph>
        </Col>
      </Row>
      <Row
        align="middle"
        justify="center"
        style={{
          margin: 0,
          width: "100%",
        }}
      >
        <Col sm={24} md={24} lg={24} xl={18} xxl={18}>
          <Card
            style={{
              borderRadius: "1rem",

              width: "100%",
            }}
            styles={{
              body: {
                padding: "0",
              },
            }}
          >
            <Row
              align="middle"
              wrap={true}
              className="aboutus-card"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <Col
                xs={24}
                md={8}
                lg={8}
                xl={8}
                xxl={8}
                style={{
                  padding: "0",
                  width: "100%",
                  height: !screens.md && "18rem",
                }}
              >
                
                <div
                  style={{
                    height: "100%",
                    backgroundImage: `url(${founder1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: !screens.md ? "1rem" : "0",
                    borderBottomLeftRadius: !screens.md ? "0" : "1rem",
                    backgroundSize: "cover",
                  }}
                ></div>
              </Col>
              <Col
                xs={24}
                md={16}
                lg={16}
                xl={16}
                xxl={16}
                style={{ padding: "1.5rem" }}
              >
                <Title
                  level={4}
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.75rem",
                    fontFamily: "Bricolage Grotesque",
                  }}
                >
                  Anders Schonberg
                </Title>
                <Text
                  style={{
                    color: "#193295",
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                  }}
                >
                  Founder & CEO
                </Text>

                <Paragraph
                  style={{
                    fontSize: "1rem",
                    color: "#565C76",
                  }}
                >
                  Anders, the visionary behind Plansom, is a seasoned
                  entrepreneur with a passion for innovative technology. Having
                  built three successful technology companies, he combines
                  technical expertise with a deep understanding of the
                  challenges facing today’s workforce. Anders is committed to
                  helping individuals and teams achieve more while maintaining a
                  healthy work-life balance.
                </Paragraph>
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
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row
        align="middle"
        justify="center"
        style={{
          margin: 0,
          width: "100%",
        }}
      >
        <Col sm={24} md={24} lg={24} xl={18} xxl={18}>
          <Card
            style={{
              borderRadius: "1rem",
              
              width: "100%",
            }}
            styles={{
              body: {
                padding: "0",
              },
            }}
           
          >
            <Row
              
              align="middle"
              wrap={true}
              className="aboutus-card"
              style={{
               
                width: "100%",
                display: "flex", 
                alignItems: "stretch", 
              }}
            >
              {!screens.md ? (
                ""
              ) : (
                <Col
                  xs={24}
                  md={16}
                  lg={16}
                  xl={16}
                  xxl={16}
                  style={{ padding: "1.5rem" }}
                >
                  <Title
                    level={4}
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "1.75rem",
                      fontFamily: "Bricolage Grotesque",
                    }}
                  >
                    Chloe Schonberg
                  </Title>
                  <Text
                    style={{
                      color: "#193295",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                  >
                    Co-Founder & COO
                  </Text>

                  <Paragraph
                    style={{
                      fontSize: "1rem",
                      color: "#565C76",
                    }}
                  >
                    Chloe, who has been instrumental in bringing Plansom to
                    life, ensures that our transformative vision is seamlessly
                    integrated into every aspect of the product. With a
                    background as Head of People Business Partners EMEA at
                    Cloudflare, Chloe oversees our operations, ensuring that our
                    users experience the full benefits of Plansom’s user-centric
                    design. 
                  </Paragraph>
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
                </Col>
              )}

              <Col
                xs={24}
                md={8}
                lg={8}
                xl={8}
                xxl={8}
                style={{
                  padding: "0",
                  width: "100%",
                  height: !screens.md && "18rem",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    backgroundImage: `url(${founder2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderTopLeftRadius: !screens.md ? "1rem" : "0rem",
                    borderTopRightRadius: "1rem",
                    borderBottomRightRadius: !screens.md ? "0rem" : "1rem",

                    backgroundSize: "cover",
                  }}
                ></div>
              </Col>
              {!screens.md && (
                <Col
                  xs={24}
                  md={16}
                  lg={16}
                  xl={16}
                  xxl={16}
                  style={{ padding: "1.5rem" }}
                >
                  <Title
                    level={4}
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "1.75rem",
                      fontFamily: "Bricolage Grotesque",
                    }}
                  >
                    Chloe Schonberg
                  </Title>
                  <Text
                    style={{
                      color: "#193295",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                  >
                    Co-Founder & COO
                  </Text>

                  <Paragraph
                    style={{
                      fontSize: "1rem",
                      color: "#565C76",
                    }}
                  >
                    Chloe, who has been instrumental in bringing Plansom to
                    life, ensures that our transformative vision is seamlessly
                    integrated into every aspect of the product. With a
                    background as Head of People Business Partners EMEA at
                    Cloudflare, Chloe oversees our operations, ensuring that our
                    users experience the full benefits of Plansom’s user-centric
                    design. 
                  </Paragraph>
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
                </Col>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};

export default FoundersSection;
