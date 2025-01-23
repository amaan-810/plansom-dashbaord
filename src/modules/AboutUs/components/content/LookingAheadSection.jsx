import React from "react";
import { Row, Col, Typography, Image} from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
const { Title, Paragraph, Text } = Typography;
import stars from "../../assets/Srars.svg";
import product from "../../assets/product.svg";

const LookingAheadSection = () => {
  const screens = useBreakpoint();
  return (
    <Row
      align="middle"
      style={{
        padding: screens.lg
          ? "4rem 0 4rem 6.25rem" // Large screens: top/bottom 4rem, left/right 6.25rem
          : screens.md
          ? "2rem 0 2rem 2rem" // Medium screens: top/bottom 2rem, left/right 2rem
          : "2rem 0 1rem 1rem",
        width: "100%",
        background:
          "linear-gradient(74deg, #465EBD 0%, #1D3BAF 50%, #152A7C 100%",
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
        <Typography
          style={{
            textAlign: !screens.md && "center",
            paddingRight: !screens.md && "1rem",
          }}
        >
          <Text
            style={{
              fontSize: !screens.lg ? "1.75rem" : "2.375rem",
              fontWeight: "600",
            }}
          >
            <span style={{ fontFamily: "Bricolage Grotesque", color: "white" }}>
              Looking
            </span>{" "}
            <span
              style={{ fontFamily: "Bricolage Grotesque", color: "#FFD042" }}
            >
              Ahead
            </span>
            {!screens.md ? (
              ""
            ) : (
              <Image
                src={stars}
                preview={false}
                style={{ position: "relative", bottom:"1.8rem" }}
              />
            )}
          </Text>
          <Paragraph style={{ textAlign: "right",margin:"0", padding :"0 1rem" }}>
            
           
              {!screens.md ? (
                <Image src={stars} preview={false} style={{height : "2rem",position: "relative", bottom: "1rem" }} />
              ) : (
                ""
              )}
          </Paragraph>
          <Paragraph style={{ color: "white" }}>
            As we grow, our commitment remains the same: making AI practical for
            real-life tasks and boosting overall productivity. We are constantly
            innovating to offer solutions that prevent burnout and manage
            digital overload, helping you achieve your goals with confidence and
            clarity!
          </Paragraph>
          <Paragraph style={{ color: "white", fontWeight: "600" }}>
            Join us in redefining the future of work. Discover how Plansom can
            make a meaningful difference in your life.
          </Paragraph>
        </Typography>
      </Col>
      <Col
        xs={24}
        md={12}
        // lg={8}
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={product}
          alt=""
          preview={false}
          style={{
            position: "relative",
            // left: !screens.lg ? "4rem":"0rem"
          }}
        />
      </Col>
    </Row>
  );
};

export default LookingAheadSection;
