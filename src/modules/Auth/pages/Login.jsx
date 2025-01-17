import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  Modal,
  Flex,
} from "antd";
import {
  ArrowLeftOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import LoginLayout from "../LoginLayout";
import "../styles/login.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useNavigate } from "react-router-dom";
import Paragraph from "antd/es/typography/Paragraph";
import { encryptData } from "../../../core/Utils/encryption";

const { Text } = Typography;

const Login = () => {
  const screens = useBreakpoint();
  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginUrl = import.meta.env.VITE_AUTH_LOGIN;

  const onFinish = async (values) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(loginUrl, JSON.stringify(values), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      const secretKey = import.meta.env.VITE_ENCRYPT_SECRET_KEY;

      console.log("Secret Key:", secretKey);
      const encryptedData = encryptData(response.data, secretKey);
      sessionStorage.setItem("authData", encryptedData);

      navigate("/myday");
    } catch (err) {
      console.error("Error logging in:", err);
      setError(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Validation Errors:", errorInfo);
  };

  const onFieldsChange = () => {
    const hasErrors = form
      .getFieldsError()
      .some((field) => field.errors.length > 0);

    const allFieldsFilled =
      form.getFieldsValue(["email", "password"]).email &&
      form.getFieldsValue(["email", "password"]).password;

    setIsButtonDisabled(hasErrors || !allFieldsFilled);
  };

  const handleModalClose = () => {
    setError(null);
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
                form={form}
                name="loginForm"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onFieldsChange={onFieldsChange}
                requiredMark={false}
                initialValues={{
                  remember: false,
                }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                  validateTrigger={["onBlur", "onChange"]}
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
                  validateTrigger={["onBlur", "onChange"]}
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

                <Row align="middle">
                  <Text className="forget-password fw-600">
                    Forgot password?
                  </Text>
                  <Button type="text" className="reset-password fw-600">
                    Reset Password
                  </Button>
                </Row>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    shape="round"
                    size="large"
                    style={{
                      backgroundColor: isButtonDisabled ? "gray" : "#1D3BAF",
                      color: "#FFFFFF",
                      borderColor: isButtonDisabled ? "gray" : "#1D3BAF",
                      cursor: isButtonDisabled ? "not-allowed" : "pointer",
                    }}
                    disabled={isButtonDisabled || isLoading} // Disable button when loading or has errors
                    loading={isLoading} // Show loading spinner
                  >
                    Log In
                  </Button>
                </Form.Item>

                <Row align="middle">
                  <Text className="forget-password fw-600">
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

      {/* Modal for error */}
      {error && (
        <Modal
          // s
          centered
          open={true}
          closable={false}
          // footer={[
          //   <Button key="close" onClick={handleModalClose}>
          //     Close
          //   </Button>,
          // ]}
          footer={null}
        >
          <Row justify="center">
            <Paragraph
              style={{ fontSize: "1.5rem" }}
              className="fw-600 f-bricolage"
            >
              Oops
            </Paragraph>
          </Row>
          <Row justify="center">
            <Paragraph style={{ fontSize: "1.5rem", textAlign: "center" }}>
              {error}
            </Paragraph>
          </Row>
          <Row justify="center">
            <Button
              size="large"
              type="primary"
              key="close"
              onClick={handleModalClose}
            >
              Ok
            </Button>
          </Row>
        </Modal>
      )}
    </LoginLayout>
  );
};

export default Login;
