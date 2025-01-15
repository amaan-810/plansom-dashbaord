import React from "react";
import { Form, Input, Button, Checkbox, Typography, Row, Col ,Card} from "antd";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import LoginLayout from "../LoginLayout";
import "../styles/login.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import loginBanner from '../../../assets/images/loginBanner.png'
import { Header } from "antd/es/layout/layout";

const { Title, Text } = Typography;

const Login = () => {
  const screens = useBreakpoint();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Validation Errors:", errorInfo);
  };

  return (
    <LoginLayout>
     
      <Row
        justify="center"
        align="middle"
        className="login-container"
        style={{ minHeight: "100vh" }}
      >
        <Col xs={20} sm={20} md={16} lg={20} xl={20}>
          <Row className="login-card" gutter={[16, 16]} align="middle">
            
            <Col span={24}>
              <Button
                icon={<ArrowLeftOutlined />}
                iconPosition="start"
                type="text"
                className="fw-600"
              >
                Return to HomePage
              </Button>
            </Col>

            <Col span={24}>
              <Text
                className="fw-600 f-bricolage"
                style={{
                  fontSize: !screens.lg ? "1.5rem" : "2.375rem",
                  color: "#0D1B4F",
                }}
              >
                Welcome back!
              </Text>
            </Col>

            <Col span={24}>
              <Form
                requiredMark={false}
                layout="vertical"
                name="loginForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateTrigger="onBlur"
                className="login-form"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input
                    size="large"
                    className="rounded-input"
                    placeholder="Enter your email"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password
                    size="large"
                    className="rounded-input"
                    placeholder="Enter your password"
                    iconRender={(visible) =>
                      visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>

                <Form.Item className="login-options" align="middle">
                  <Text className="forgot-password fw-600">
                    Forgot Password?
                  </Text>

                  <Button type="text" className="reset-password fw-600">
                    Reset Password
                  </Button>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    className="fw-600"
                    type="primary"
                    htmlType="submit"
                    block
                    shape="round"
                    size="large"
                    style={{ backgroundColor: "#1D3BAF", color: "#FFFFFF" }}
                  >
                    Log In
                  </Button>
                </Form.Item>

                <Row className="login-options" align="middle">
                  <Text className="forgot-password fw-600">
                    Not registered yet?
                  </Text>

                  <Button type="text" className="reset-password fw-600">
                    Sign Up
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </LoginLayout>
  );
};

export default Login;
