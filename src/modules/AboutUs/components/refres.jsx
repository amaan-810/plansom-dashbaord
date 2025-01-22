import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
 Layout,
 Row,
 Col,
 Image,
 Button,
 Avatar,
 Dropdown,
 Typography,
 Input,
 Divider,
 Grid
} from "antd";
import { LoginOutlined } from "@ant-design/icons";
import PlansomLogo from "../../../images/vector/Frame.png";
import Photo1 from "../../../images/vector/Photo.svg";
import Photo2 from "../../../images/vector/Photo1.svg";
import ericimg from "../../../images/Aboutus/Photo.svg";
import patrickimg from "../../../images/Aboutus/Photo1.svg";
import linkedin from "../../../images/Aboutus/LinkedIn.svg";
import srars from "../../../images/Aboutus/Srars.svg";
import stars from "../../../images/Aboutus/Star 1.svg";
import missionimg from "../../../images/Aboutus/mission.png";
import logoFooter from "../../../images/Strategy/logoFooter.png";
import promptsection from "../../../images/Aboutus/Prompts_Section.svg";
import quickwins from "../../../images/Aboutus/Quick wins.svg";
import aicoach from "../../../images/Aboutus/AI Coach.svg";
import DropdownIcon from "../../../images/Strategy/DropdownIcon.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";




import PageFooter from "../landingPage/PageFooter";


const { Title, Paragraph, Text, Link } = Typography;
const { useBreakpoint } = Grid;


const { Header, Content } = Layout;
const headerStyle = {
 position: "sticky",
 top: 0,
 zIndex: 100,
 // width: "100%",
 padding: "16px 120px",
 background: "transparent",
 height: "72px"
};


function AboutUsPage({}) {
 const navigate = useNavigate();
 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };
 const screens = useBreakpoint();
 const getPadding = () => {
   if (screens.xs) return "2.5rem 1rem";
   if (screens.sm) return "3.75rem 7.5rem";
   if (screens.md) return "3.75rem 7.5rem";
   if (screens.lg) return "3.5rem"; // Large Screens
   return "5rem"; // Extra Large Screens
 };


 const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= 700);


 useEffect(() => {
   const handleResize = () => {
     setIsMobileSize(window.innerWidth <= 700);
   };


   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);


 return (
   <div>
     <Layout
       style={{
         padding: isMobileSize ? "0rem 1rem 0rem 0rem" : "1rem 7.5rem",
         backgroundColor: "#E8EBF7"
       }}
     >
       <Row align="middle" justify="space-between" wrap={false}>
         {/* Left Section: Logo and Pricing */}
         <Col
           xs={12}
           sm={12}
           md={12}
           style={{
             display: "flex",
             alignItems: "center",
             justifyContent: isMobileSize ? "space-between" : "flex-start",
             textAlign: "left"
           }}
         >
           <Image
             className="plansom-logo"
             style={{ width: "10rem", height: "2rem",paddingLeft:isMobileSize? "1rem":"0rem" }}
             src={PlansomLogo}
             preview={false}
           />
           {!isMobileSize && (
             <Button
               type="text"
               style={{
                 marginLeft: "30px",
                 marginTop: "9px",
                 fontSize: "16px",
                 color: "#000",
                 fontWeight: 500
               }}
               // onClick={handlePricing}
             >
               Pricing
             </Button>
           )}
         </Col>


         {/* Right Section: Log In and Mobile Menu */}
         <Col xs={12} sm={12} md={12} style={{ textAlign: "right" }}>
           {isMobileSize ? (
             <>
               <IconButton
                 onClick={handleClick}
                 size="small"
                 sx={{ ml: 2 }}
                 aria-controls={open ? "account-menu" : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? "true" : undefined}
               >
                 <Avatar src={DropdownIcon} sx={{ width: 50, height: 50 }} />
               </IconButton>
               <Menu
                 anchorEl={anchorEl}
                 id="account-menu"
                 open={open}
                 onClose={handleClose}
                 onClick={handleClose}
                 slotProps={{
                   paper: {
                     elevation: 0,
                     sx: {
                       overflow: "visible",
                       filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                       mt: 1.5,
                       "& .MuiAvatar-root": {
                         width: 32,
                         height: 32,
                         ml: -0.5,
                         mr: 1
                       },
                       "&::before": {
                         content: '""',
                         display: "block",
                         position: "absolute",
                         top: 0,
                         right: 14,
                         width: 10,
                         height: 10,
                         bgcolor: "background.paper",
                         transform: "translateY(-50%) rotate(45deg)",
                         zIndex: 0
                       }
                     }
                   }
                 }}
                 transformOrigin={{
                   horizontal: "right",
                   vertical: "top"
                 }}
                 anchorOrigin={{
                   horizontal: "right",
                   vertical: "bottom"
                 }}
               >
                 <MenuItem >
                   <ListItemIcon>
                     <LoginIcon fontSize="small" />
                   </ListItemIcon>
                   Pricing
                 </MenuItem>
                 <MenuItem >
                   <ListItemIcon>
                     <LoginIcon fontSize="small" />
                   </ListItemIcon>
                   Log In
                 </MenuItem>
               </Menu>
             </>
           ) : (
             <>
               <Button
                 // onClick={handleLoginClick}
                 type="text"
                 style={{
                   textTransform: "none",
                   // marginRight: "20px",
                   fontSize: "16px",
                   fontWeight: 500
                 }}
               >
                 Log In
               </Button>
             </>
           )}
         </Col>
       </Row>
       <Row
         style={{
           padding: isMobileSize ? " 2.5rem 1rem 3.5rem 1rem" : "5rem 0rem"
         }}
       >
         <Col xs={24} md={12}>
           <Typography>
             <Title className="f-bricolage">About Us</Title>
             <Paragraph className="aboutus-paragraph-style">
               At Plansom, we make achieving your goals simple and stress-free.
               Built to tackle the chaos of endless tasks and overwhelming
               priorities, Plansom helps you create clear, actionable plans in
               minutes.
             </Paragraph>
             <Paragraph className="aboutus-paragraph-style">
               Whether you’re looking to grow your business, streamline your
               day, or simply get unstuck, we’re here to guide you every step
               of the way. With Plansom, it’s not just about planning—it’s
               about making progress.
             </Paragraph>
             <Paragraph className="aboutus-paragraph-style">
               Let’s get started!
             </Paragraph>
           </Typography>
         </Col>
         <Col span={4}></Col>
         <Col span={2} style={{ padding: "" }}>
           {" "}
           <Image
             style={{ marginBottom: "-500px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col>
         <Col span={4}>
           {" "}
           <Image
             style={{ marginTop: "-45px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col>
         <Col span={1}>
           {" "}
           <Image
             style={{ marginBottom: "-371px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col>
         <Col span={1}>
           {" "}
           <Image
             style={{ marginBottom: "-228px" }}
             src={stars}
             alt={stars}
             preview={false}
           />
         </Col>
       </Row>
     </Layout>
     <Layout
       style={{
         alignSelf: "stretch",
         // height: "70vh",
         padding: getPadding(),
         background:
           "linear-gradient(65deg, rgba(125, 105, 255, 0.10) -17.44%, rgba(255, 255, 255, 0.50) 28.03%), #FFF"
       }}
     >
       <Row
         // gutter={[16, 16]}


         // justify="center"
         // align="middle"
         style={{
           height: "100%",
           gap: "5rem"
         }}


         // gutter={[16, 16]}
       >
         <Col
           xs={24}
           sm={24}
           md={12}
           lg={10}
           style={
             {
               // display: "flex",
               // justifyContent: "center",
               // alignItems: "center"
             }
           }
         >
           {" "}
           <Image
             src={missionimg}
             alt={missionimg}
             style={
               {
                 // width: "100%",
                 // height: "100%",
                 // objectFit: "cover",
                 // marginRight: "20px"
               }
             }
             preview={false}
           />
         </Col>
         <Col
           xs={24}
           sm={24}
           md={12}
           lg={12}
           style={{ alignContent: "center" }}
         >
           <Typography style={{ textAlign: isMobileSize ? "center" : "left" }}>
             <Title>Mission</Title>
             <Paragraph className="aboutus-paragraph-style">
               To help individuals efficiently accomplish their tasks and feel
               in control by providing personalised guidance and
               accountability.
             </Paragraph>
             <Title>Vision</Title>
             <Paragraph className="aboutus-paragraph-style">
               To transform the way people work and create a world where
               everyone can effortlessly achieve their goals and enjoy a
               fulfilling, balanced life.
             </Paragraph>
           </Typography>
         </Col>
       </Row>
     </Layout>
     <Layout
       style={{
         padding: isMobileSize ? "2.5rem 1rem" : "7.5rem 20.25rem",
         backgroundColor: "#F7F8FC",
         gap: "24px"
       }}
     >
       <Row style={{ display: "flex", justifyContent: "center" }}>
         {" "}
         <Title>
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
       </Row>
       <div>
         <Row
           style={{
             borderRadius: "16px",
             overflow: "hidden",
             // minHeight: "372px",
             background: "#fff",
             // marginBottom: "10px",
             boxShadow: "4px 0px 20px 0px #05060E0F"
           }}
         >
           <Col xs={24} sm={24} md={4} lg={6}>
             <Image
               src={Photo1}
               alt={Photo1}
               style={{
                 width: "100%",
                 height: "100%"
                 // objectFit: "cover"
               }}
               preview={false}
             />
           </Col>
           <Col
             xs={24}
             sm={24}
             md={18}
             lg={18}
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               padding: isMobileSize
                 ? "1.25rem"
                 : "2.5rem 1.75rem 2.5rem 2.5rem"
             }}
           >
             <div>
               <div style={{ paddingBottom: "8px" }}>
                 <Typography
                   style={{
                     fontFamily: "Bricolage Grotesque",
                     fontWeight: "600",
                     lineHeight: "36px",
                     fontSize: "28px"
                   }}
                 >
                   Anders Schonberg
                 </Typography>
                 <Typography
                   style={{
                     fontFamily: "Inter",
                     fontWeight: "600",
                     lineHeight: "28px",
                     fontSize: "20px",
                     color: "#193295"
                   }}
                 >
                   Founder & CEO
                 </Typography>
               </div>
               <Text className="paragraph-style">
                 Anders, the visionary behind Plansom, is a seasoned
                 entrepreneur with a passion for innovative technology. Having
                 built three successful technology companies, he combines
                 technical expertise with a deep understanding of the
                 challenges facing today’s workforce. Anders is committed to
                 helping individuals and teams achieve more while maintaining a
                 healthy work-life balance.
               </Text>
               <Row>
                 <Image
                   src={linkedin}
                   alt={linkedin}
                   style={
                     {
                       // width: "100%",
                       // height: "100%",
                       // objectFit: "cover"
                       // marginRight: "20px"
                     }
                   }
                   preview={false}
                 />
                 <Typography
                   style={{
                     fontFamily: "inter",
                     fontWeight: "600",
                     fontSize: "16px",
                     lineHeight: "24px"
                   }}
                 >
                   LinkedIn
                 </Typography>
               </Row>
             </div>
           </Col>
         </Row>
       </div>
       <div>
         <Row
           style={{
             borderRadius: "16px",
             overflow: "hidden",
             background: "#fff",
             boxShadow: "4px 0px 20px 0px #05060E0F"
             // flexDirection: "column"
           }}
         >
           {/* Image Column */}
           <Col
             xs={24}
             sm={24}
             md={4}
             lg={6}
             style={{
               order: isMobileSize ? 1 : 2,
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
             }}
           >
             <Image
               src={Photo2}
               alt="Chloe Schonberg"
               style={{
                 width: "100%",
                 objectFit: "cover"
               }}
               preview={false}
             />
           </Col>


           {/* Text Column */}
           <Col
             xs={24}
             sm={24}
             md={18}
             lg={18}
             style={{
               order: isMobileSize ? 2 : 1,
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               padding: isMobileSize
                 ? "1.25rem"
                 : "2.5rem 2.5rem 2.5rem 1.75rem"
             }}
           >
             <div>
               <div style={{ paddingBottom: "8px" }}>
                 <Typography
                   style={{
                     fontFamily: "Bricolage Grotesque",
                     fontWeight: "600",
                     lineHeight: "36px",
                     fontSize: "28px"
                   }}
                 >
                   Chloe Schonberg
                 </Typography>
                 <Typography
                   style={{
                     fontFamily: "Inter",
                     fontWeight: "600",
                     lineHeight: "28px",
                     fontSize: "20px",
                     color: "#193295"
                   }}
                 >
                   Co-Founder & COO
                 </Typography>
               </div>
               <Text className="paragraph-style">
                 Chloe, who has been instrumental in bringing Plansom to life,
                 ensures that our transformative vision is seamlessly
                 integrated into every aspect of the product. With a background
                 as Head of People Business Partners EMEA at Cloudflare, Chloe
                 oversees our operations, ensuring that our users experience
                 the full benefits of Plansom’s user-centric design.
               </Text>
               <Row>
                 <Image
                   src={linkedin}
                   alt="LinkedIn"
                   preview={false}
                   style={{ marginRight: "8px" }}
                 />
                 <Typography
                   style={{
                     fontFamily: "Inter",
                     fontWeight: "600",
                     fontSize: "16px",
                     lineHeight: "24px"
                   }}
                 >
                   LinkedIn
                 </Typography>
               </Row>
             </div>
           </Col>
         </Row>
       </div>
     </Layout>
     <Layout
       style={{
         padding: isMobileSize ? "2.5rem 1rem" : "7.5rem",
         background:
           "linear-gradient(58deg, rgba(46, 18, 204, 0.06) 9.1%, rgba(255, 255, 255, 0.00) 35.44%, rgba(255, 255, 255, 0.00) 70.32%, rgba(125, 105, 255, 0.10) 87.79%), #FFF"
       }}
     >
       <Row style={{ display: "flex", justifyContent: "center" }}>
         {" "}
         <Col xs={24}>
           <Title style={{ textAlign: "center" }}>
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
           </Title>
         </Col>
       </Row>
       <Row
         style={{
           gap: "24px",
           display: "flex",
           justifyContent: "center"
         }}
       >
         {/* Patrick's Card */}


         <Col
           xs={24}
           sm={24}
           md={11}
           style={{
             alignItems: "center",
             padding: isMobileSize ? "1rem" : "2.5rem",
             border: "1px solid #DDDEE4",
             borderRadius: "16px",
             overflow: "hidden",
             // minHeight: "500px",
             background: "#fff"
           }}
         >
           <Row>
             <Col xs={8} sm={8} md={11}>
               {" "}
               <Image
                 src={patrickimg}
                 alt={patrickimg}
                 style={{
                   width: "100%",
                   height: "100%",
                   objectFit: "cover",
                   marginRight: "20px"
                 }}
                 preview={false}
               />
             </Col>
             <Col span={18} style={{ alignContent: "center" }}>
               {" "}
               <Typography
                 style={{
                   fontFamily: "Bricolage Grotesque",
                   fontWeight: "600",
                   lineHeight: "36px",
                   fontSize: "28px"
                 }}
               >
                 Patrick Scully
               </Typography>
               <Typography
                 style={{
                   fontFamily: "Inter",
                   fontWeight: "600",
                   lineHeight: "28px",
                   fontSize: "20px",
                   color: "#193295"
                 }}
               >
                 Non-Executive Director
               </Typography>
             </Col>
           </Row>
           <Row>
             <Typography style={{ marginTop: "1.5rem" }}>
               <Paragraph className="paragraph-style">
                 Patrick brings over 25 years of experience as a business
                 leader, having played pivotal roles in scaling operations
                 within the software, technology, and media sectors. Currently,
                 he serves as Vice President of APJ & EMEA Commercial Finance &
                 Operations at Coupa Software, where he drives revenue growth,
                 optimises the P&L and improves operational efficiency across
                 international markets. Patrick’s expertise spans commercial
                 strategy, structure, scaling and international business
                 expansion, making him a key contributor to Plansom's vision of
                 empowering professionals to achieve meaningful goals.
               </Paragraph>
             </Typography>
             <Row>
               <Image
                 src={linkedin}
                 alt={linkedin}
                 style={{
                   width: "100%",
                   height: "100%",
                   objectFit: "cover"
                   // marginRight: "20px"
                 }}
                 preview={false}
               />
               <Typography
                 style={{
                   fontFamily: "inter",
                   fontWeight: "600",
                   fontSize: "16px",
                   lineHeight: "24px"
                 }}
               >
                 LinkedIn
               </Typography>
             </Row>
           </Row>
         </Col>
         {/* Eric's Card */}
         <Col
           md={11}
           sm={24}
           xs={24}
           style={{
             alignItems: "center",
             padding: isMobileSize ? "1rem" : "2.5rem",
             border: "1px solid #DDDEE4",
             borderRadius: "16px",
             overflow: "hidden",
             // minHeight: "500px",
             background: "#fff",
             marginBottom: "10px"
             // minWidth: "588px"
           }}
         >
           <Row>
             <Col xs={8} sm={8} md={11}>
               {" "}
               <Image
                 src={ericimg}
                 alt={ericimg}
                 style={{
                   width: "100%",
                   height: "100%",
                   objectFit: "cover",
                   marginRight: "20px"
                 }}
                 preview={false}
               />
             </Col>
             <Col md={18} xs={24} style={{ alignContent: "center" }}>
               <Typography
                 style={{
                   fontFamily: "Bricolage Grotesque",
                   fontWeight: "600",
                   lineHeight: "36px",
                   fontSize: "28px"
                 }}
               >
                 Eric Paulak
               </Typography>
               <Typography
                 style={{
                   fontFamily: "Inter",
                   fontWeight: "600",
                   lineHeight: "28px",
                   fontSize: "20px",
                   color: "#193295"
                 }}
               >
                 Non-Executive Director
               </Typography>
             </Col>
           </Row>
           <Row>
             <Typography style={{ marginTop: "1.5rem" }}>
               <Paragraph className="paragraph-style">
                 Eric is a seasoned business leader with almost 40 years of
                 experience, 28 of which were at Gartner, where he held various
                 executive leadership roles, including as Senior Vice President
                 leading global client interaction services. Eric led global
                 teams that provided critical research and advisory services to
                 senior IT leaders and technical professionals, significantly
                 enhancing client satisfaction and business value. Eric also
                 spent 23 years in the United States Army Reserve, leading
                 logistics and public affairs operations. His expertise in IP
                 development, global operations, and emerging technologies
                 makes him a valuable contributor to Plansom’s mission of
                 driving meaningful impact through innovative solutions.
               </Paragraph>
             </Typography>
           </Row>
           <Row>
             <Image
               src={linkedin}
               alt={linkedin}
               style={{
                 width: "100%",
                 height: "100%",
                 objectFit: "cover"
                 // marginRight: "20px"
               }}
               preview={false}
             />
             <Typography
               style={{
                 fontFamily: "inter",
                 fontWeight: "600",
                 fontSize: "16px",
                 lineHeight: "24px"
               }}
             >
               LinkedIn
             </Typography>
           </Row>
         </Col>
       </Row>
     </Layout>
     <Layout
       style={{
         padding: isMobileSize ? "2.5rem 1rem" : "7.5rem 0rem 7.5rem 7.5rem",
         alignSelf: "stretch",
         background:
           "linear-gradient(74deg, #465EBD 0%, #1D3BAF 50%, #152A7C 100%"
       }}
     >
       <Row>
         <Col md={12} lg={12} xs={24} sm={24}>
           <Typography style={{ textAlign: isMobileSize ? "center" : "left" }}>
             <Title>
               {" "}
               <span
                 style={{ fontFamily: "Bricolage Grotesque", color: "#FFF" }}
               >
                 Looking
               </span>{" "}
               <span
                 style={{
                   fontFamily: "Bricolage Grotesque",
                   color: "#FFD042"
                 }}
               >
                 Ahead
               </span>
               {/* <img
                 src={srars} // Replace with the actual SVG image path or variable
                 alt="Decoration"
                 style={{
                   position: "absolute",
                   left: "17.125rem",
                   top: "-1.125rem",
                   width: "3.375rem",
                   height: "3.375rem"
                 }}
               /> */}
             </Title>


             <Paragraph
               style={{
                 fontFamily: "inter",
                 fontSize: "1.25rem",
                 fontStyle: "normal",
                 fontWeight: "400",
                 lineHeight: "1.75rem",
                 color: "#FFFFFF"
               }}
             >
               As we grow, our commitment remains the same: making AI practical
               for real-life tasks and boosting overall productivity. We are
               constantly innovating to offer solutions that prevent burnout
               and manage digital overload, helping you achieve your goals with
               confidence and clarity!
             </Paragraph>
             <Paragraph
               style={{
                 fontFamily: "inter",
                 fontSize: "1.25rem",
                 fontStyle: "normal",
                 fontWeight: "600",
                 lineHeight: "1.75rem",
                 color: "#FFFFFF"
               }}
             >
               Join us in redefining the future of work. Discover how Plansom
               can make a meaningful difference in your life.
             </Paragraph>
           </Typography>
         </Col>
         <Col md={12} lg={12} xs={24}>
           <Row>
             <Col
               md={12}
               lg={12}
               xs={12}
               style={{
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center",
                 alignItems: "flex-end"
               }}
             >
               <Image src={quickwins} alt={quickwins} preview={false} />
               <Image src={aicoach} alt={aicoach} preview={false} />
             </Col>
             <Col
               md={12}
               lg={12}
               xs={12}
               style={{
                 display: "flex",
                 justifyContent: "end",
                 alignItems: "center"
               }}
             >
               <Image
                 src={promptsection}
                 alt={promptsection}
                 preview={false}
               />
             </Col>
           </Row>
         </Col>
       </Row>
     </Layout>
     <PageFooter />
   </div>
 );
}


export default AboutUsPage;





