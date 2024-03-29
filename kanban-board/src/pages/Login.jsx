import React, { useState } from "react";
import { Avatar, Flex, Button, Checkbox, Form, Input, Alert } from "antd";
import { LockOutlined, UserAddOutlined, MailFilled } from "@ant-design/icons";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import logoPNG from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { Loginuser } from "../features/Slice/UserSlice";

const Login = () => {
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      setLoadings(true);
      const data = await axios.post("http://localhost:8000/v1/api/auth/login", {
        email: values.email,
        password: values.password,
      });
      setLoadings(false);
      setMsg(data.data.success);
      setMsgType("success");
      setTimeout(() => {
        navigate("/");
      }, 2500);
      dispatch(Loginuser(data));
      localStorage.setItem("users", JSON.stringify(data));
    } catch (error) {
      setLoadings(false);
      setMsg(error.response.data.error);
      setMsgType("error");
      if (
        error.response.data.error === "Your are not Verified, Please Verify !"
      ) {
        setTimeout(() => {
          navigate(`/otpverify/${values.email}`);
        }, 2500);
      }
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
        style={{ height: "100vh", boxSizing: "border-box" }}
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
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailFilled className="site-form-item-icon" />}
                placeholder="example@mail.com"
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
