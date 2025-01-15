
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, Row, Col } from "antd";
import { ArrowLeftOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import LoginLayout from "../LoginLayout";
import "../styles/login.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Text } = Typography;

const Login = () => {
  const screens = useBreakpoint();
  const [form] = Form.useForm(); // Create the form instance
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button disabled state

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Validation Errors:", errorInfo);
  };

  const onFieldsChange = () => {
    // Check if any fields have errors
    const hasErrors = form.getFieldsError().some((field) => field.errors.length > 0);

    // Check if all required fields are filled
    const allFieldsFilled = form.getFieldsValue(["email", "password"]).email && form.getFieldsValue(["email", "password"]).password;

    // Enable or disable the button based on validity
    setIsButtonDisabled(hasErrors || !allFieldsFilled);
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
                form={form} // Connect form instance directly here
                name="loginForm"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onFieldsChange={onFieldsChange} // Listen for field changes
                requiredMark={false} // Disable the asterisk symbol for required fields
                initialValues={{
                  remember: false, // Set default value for the checkbox
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
                  rules={[{ required: true, message: "Please enter your password!" }]}
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

                <Form.Item
                  name="remember"
                  valuePropName="checked" // Handle checkbox value
                >
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
                    disabled={isButtonDisabled} // Use dynamic state for disabling
                  >
                    Log In
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </LoginLayout>
  );
};

export default Login;
