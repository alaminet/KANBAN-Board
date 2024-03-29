import React, { useState } from "react";
import axios from "axios";
import { Avatar, Flex, Button, Checkbox, Form, Input, Alert } from "antd";
import { UserOutlined, LockOutlined, MailFilled } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import logoPNG from "../assets/logo.png";

const Signup = () => {
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const navigate = useNavigate();

  //   registration data send to server
  const onFinish = async (values) => {
    try {
      setLoadings(true);
      const data = await axios.post(
        "http://localhost:8000/v1/api/auth/registration",
        {
          name: values.username,
          email: values.email,
          password: values.password,
        }
      );
      setLoadings(false);
      setMsg(data.data.message);
      setMsgType("success");
      setTimeout(() => {
        navigate(`/otpverify/${values.email}`);
      }, 5000);
    } catch (error) {
      setLoadings(false);
      setMsg(error.response.data.error);
      setMsgType("error");
    }
  };
  return (
    <>
      <div>
        {msg && (
          <Alert
            style={{ width: "500px", margin: "0 auto" }}
            message={msg}
            type={msgType}
            showIcon
            closable
          />
        )}
      </div>
      <Flex
        align="center"
        justify="center"
        vertical
        style={{ height: "90vh", boxSizing: "border-box" }}
      >
        <div>
          <Avatar size={100} src={logoPNG} />
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
          Get Started With KANBAN!
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
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                type="email"
                prefix={<MailFilled className="site-form-item-icon" />}
                placeholder="Email"
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
              <NavLink to={"/forgotpass"} className="login-form-forgot">
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
                Signup
              </Button>
              Or <NavLink to={"/login"}>Already have an account!</NavLink>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </>
  );
};

export default Signup;
