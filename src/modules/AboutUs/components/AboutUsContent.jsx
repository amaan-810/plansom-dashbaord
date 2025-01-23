// import React from "react";
// import { Layout, Typography, Row, Col, Image } from "antd";
// import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
// import stars from "./../assets/star1.svg";
// import mission from "../assets/mission.svg";

// const { Content } = Layout;
// const { Title, Paragraph } = Typography;

// const AboutUsContent = () => {
//   const screens = useBreakpoint();

//   return (
//     <Content
//       style={{
//         marginTop: "5rem",
//         overflowX: "hidden", // Prevent horizontal scrolling
//       }}
//     >
//       {/* About Us Row */}
//       <div
//         style={{
//           padding: !screens.lg
//             ? !screens.md
//               ? "2rem 1rem"
//               : "2rem 2rem"
//             : "2rem 6.25rem",
//           boxSizing: "border-box", // Include padding in width calculation
//           maxWidth: "100vw", // Ensure it doesn’t exceed the viewport width
//           backgroundColor: "#E8EBF7",
//         }}
//       >
//         <Row
//           gutter={[16, 16]} // Adds consistent spacing between columns
//           align="middle"
//           justify="center"
//           style={{
//             width: "100%", // Make sure the row stays within the container
//             margin: 0, // Remove any negative margins
//           }}
//         >
//           <Col
//             xs={24}
//             md={12}
//             style={{
//               wordWrap: "break-word",
//               overflowWrap: "break-word",
//               boxSizing: "border-box",
//               padding: "1rem",
//             }}
//           >
//             <Typography>
//               <Title>About Us</Title>
//               <Paragraph>
//                 At Plansom, we make achieving your goals simple and stress-free.
//                 Built to tackle the chaos of endless tasks and overwhelming
//                 priorities, Plansom helps you create clear, actionable plans in
//                 minutes.
//               </Paragraph>
//               <Paragraph>
//                 Whether you’re looking to grow your business, streamline your
//                 day, or simply get unstuck, we’re here to guide you every step
//                 of the way. With Plansom, it’s not just about planning—it’s
//                 about making progress.
//               </Paragraph>
//               <Paragraph>Let’s get started!</Paragraph>
//             </Typography>
//           </Col>
//           <Col
//             xs={24}
//             md={12}
//             style={{
//               wordWrap: "break-word",
//               overflowWrap: "break-word",
//               boxSizing: "border-box",
//               padding: "1rem",
//             }}
//           >
//             <Typography>
//               <Title>About Us</Title>
//               <Paragraph>
//                 At Plansom, we make achieving your goals simple and stress-free.
//                 Built to tackle the chaos of endless tasks and overwhelming
//                 priorities, Plansom helps you create clear, actionable plans in
//                 minutes.
//               </Paragraph>
//               <Paragraph>
//                 Whether you’re looking to grow your business, streamline your
//                 day, or simply get unstuck, we’re here to guide you every step
//                 of the way. With Plansom, it’s not just about planning—it’s
//                 about making progress.
//               </Paragraph>
//               <Paragraph>Let’s get started!</Paragraph>
//             </Typography>
//           </Col>
//         </Row>
//       </div>

//     </Content>
//   );
// };

// export default AboutUsContent;

import React from "react";
import { Layout, Typography, Row, Col, Image,Card } from "antd";
import { LinkedinFilled, LinkedinOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import stars from "./../assets/star1.svg";
import mission from "../assets/mission.svg";
import person1 from "../assets/person1.svg";
import '../styles/common.css'
const { Content } = Layout;
const { Title, Paragraph,Text } = Typography;

const AboutUsContent = () => {
  const screens = useBreakpoint();

  const getDynamicPadding = (screens) => {
    if (screens.lg) {
      return "2rem 6.25rem"; // Large screens: top/bottom 2rem, left/right 6.25rem
    } else if (screens.md) {
      return "2rem 2rem"; // Medium screens: top/bottom 2rem, left/right 2rem
    } else {
      return "2rem 1rem"; // Small screens: top/bottom 2rem, left/right 1rem
    }
  };

  return (
    <Content
      style={{
        marginTop: "5rem",
        marginBottom:"3rem",
        height: "100vh",
        overflow: "scroll", // Prevent horizontal scrolling
      }}
    >
      {/* Wrap Row in a container */}
      <Row
        gutter={[16, 16]} // Consistent spacing between columns
        align="middle"
        //   justify="center"
        style={{
          padding: getDynamicPadding(screens),
          margin: 0, // Remove default negative margins
          width: "100%", // Ensure row stays within container
          background: "#E8EBF7",
        }}
      >
        <Col
          xs={24}
          md={12}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            padding: "1rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <Typography>
            <Title>About Us</Title>
            <Paragraph>
              At Plansom, we make achieving your goals simple and stress-free.
              Built to tackle the chaos of endless tasks and overwhelming
              priorities, Plansom helps you create clear, actionable plans in
              minutes.
            </Paragraph>
            <Paragraph>
              Whether you’re looking to grow your business, streamline your day,
              or simply get unstuck, we’re here to guide you every step of the
              way. With Plansom, it’s not just about planning—it’s about making
              progress.
            </Paragraph>
            <Paragraph>Let’s get started!</Paragraph>
          </Typography>
        </Col>
        {/* <Col
            xs={24}
            md={12}
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              padding: "1rem",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <Typography>
              <Title>About Us</Title>
              <Paragraph>
                At Plansom, we make achieving your goals simple and stress-free.
                Built to tackle the chaos of endless tasks and overwhelming
                priorities, Plansom helps you create clear, actionable plans in
                minutes.
              </Paragraph>
              <Paragraph>
                Whether you’re looking to grow your business, streamline your
                day, or simply get unstuck, we’re here to guide you every step
                of the way. With Plansom, it’s not just about planning—it’s
                about making progress.
              </Paragraph>
              <Paragraph>Let’s get started!</Paragraph>
            </Typography>
          </Col> */}
      </Row>

      <Row
        gutter={[16, 16]} // Consistent spacing between columns
        align="middle"
        //   justify="center"
        style={{
          padding: getDynamicPadding(screens),
          margin: 0,
          width: "100%",
          background:
            "linear-gradient(65deg, rgba(125, 105, 255, 0.10) -17.44%, rgba(255, 255, 255, 0.50) 28.03%)",
        }}
      >
        <Col
          xs={24}
          md={12}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            padding: "1rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <Image src={mission} alt="" preview={false} />
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            padding: "1rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <Typography style={{ textAlign: !screens.md ? "center" : "left" }}>
            <Title>Mission</Title>
            <Paragraph className="aboutus-paragraph-style">
              To help individuals efficiently accomplish their tasks and feel in
              control by providing personalised guidance and accountability.
            </Paragraph>
            <Title>Vision</Title>
            <Paragraph className="aboutus-paragraph-style">
              To transform the way people work and create a world where everyone
              can effortlessly achieve their goals and enjoy a fulfilling,
              balanced life.
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Row
        
        style={{
          padding: getDynamicPadding(screens),
          width: "100%",
          background:
            "linear-gradient(65deg, rgba(125, 105, 255, 0.10) -17.44%, rgba(255, 255, 255, 0.50) 28.03%)",
          //    backgroundSize:"cover",
        }}
      >
        <Row
          align="middle"
          justify="center"
          style={{ width: "100%",padding:"0" }}
        >
          <Col span={24}>
          <Title style={{ textAlign: "center" }}>
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
          </Title>
          </Col>
        </Row>

        <Row // Consistent spacing between columns
          align="middle"
          justify="center"
          style={{
            margin: 0, // Remove default negative margins
            width: "100%", // Ensure row stays within container
          }}
          
        >
            <Col  sm={24}md={18}>
          <Card
            style={{
              borderRadius: "2rem",
              padding:"0",
              boxShadow: "0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1)",
            //   padding: "1.5rem",
            }}
          >
            <Row
              gutter={[16, 16]}
              align="middle"
              wrap={true} // Enables wrapping for smaller screens
            >
              
              <Col
                xs={24}
                md={5}
                style={{
                  textAlign: "center", // Center image on smaller screens
                }}
              >
                <Image
                  src={person1} // Replace with your image URL
                  alt="Anders Schonberg"
                  style={{
                    width: "100%",
                    height:"100%",
                    // Responsive size for the image
                    // Optional rounded image
                  }}
                />
              </Col>
              <Col xs={24} md={16}>
                <Title
                  level={4}
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1rem", // Use rem for scalable font sizes
                  }}
                >
                  Anders Schonberg
                </Title>
                <Text
                  style={{
                    color: "#007bff",
                    fontWeight: "bold",
                    fontSize: "1rem", // Adjust font size
                  }}
                >
                  Founder & CEO
                </Text>
                
                <Paragraph
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  Anders, the visionary behind Plansom, is a seasoned entrepreneur with a passion for innovative technology. Having built three successful technology companies, he combines technical expertise with a deep understanding of the challenges facing today’s workforce. Anders is committed to helping individuals and teams achieve more while maintaining a healthy work-life balance.
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
        
       

      </Row>

      <Row
        gutter={[16, 16]} // Consistent spacing between columns
        align="middle"
        //   justify="center"
        style={{
          padding: getDynamicPadding(screens),
          margin: 0,
          width: "100%",
          background:
            "linear-gradient(65deg, rgba(125, 105, 255, 0.10) -17.44%, rgba(255, 255, 255, 0.50) 28.03%)",
        }}
      >
        <Col
          xs={24}
          md={12}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            padding: "1rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <Image src={mission} alt="" preview={false} />
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            padding: "1rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <Typography style={{ textAlign: !screens.md ? "center" : "left" }}>
            <Title>Mission</Title>
            <Paragraph className="aboutus-paragraph-style">
              To help individuals efficiently accomplish their tasks and feel in
              control by providing personalised guidance and accountability.
            </Paragraph>
            <Title>Vision</Title>
            <Paragraph className="aboutus-paragraph-style">
              To transform the way people work and create a world where everyone
              can effortlessly achieve their goals and enjoy a fulfilling,
              balanced life.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </Content>
  );
};

export default AboutUsContent;
