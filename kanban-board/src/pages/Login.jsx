import React, { useState } from "react";
import { Avatar, Flex, Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined, UserAddOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loadings, setLoadings] = useState(false);
  const onFinish = (values) => {
    setLoadings(true);
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Flex
        align="center"
        justify="center"
        vertical
        style={{ height: "100vh", boxSizing: "border-box" }}
      >
        <div>
          <Avatar size={64} icon={<UserAddOutlined />} />
        </div>
        <p
          style={{
            color: "0a2647",
            fontSize: "35px",
            fontWeight: "700",
            lineHeight: "45px",
            margin: "20px 0",
          }}
        >
          Login your account!
        </p>
        <div style={{ width: "320px" }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <NavLink to={"/"} className="login-form-forgot">
                Forgot password
              </NavLink>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loadings}
              >
                Log in
              </Button>
              Or <NavLink to={"/signup"}>Signup now!</NavLink>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </>
  );
};

export default Login;
