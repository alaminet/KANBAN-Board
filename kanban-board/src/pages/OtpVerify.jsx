import React, { useState } from "react";
import axios from "axios";
import { Flex, Button, Form, Input, Alert } from "antd";
import { ApiOutlined } from "@ant-design/icons";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const OtpVerify = () => {
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  //   registration data send to server
  const onFinish = async (values) => {
    try {
      setLoadings(true);
      const data = await axios.post(
        "http://localhost:8000/v1/api/auth/matchotp",
        {
          email: params.email,
          otp: values.otp,
        }
      );
      setLoadings(false);
      setMsg(data.data.message);
      setMsgType("success");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (error) {
      setLoadings(false);
      setMsg(error.response.data.error);
      setMsgType("error");
      if (error.response.data.error === "Already Verified, Please Login") {
        setTimeout(() => {
          navigate("/login");
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
        style={{ height: "90vh", boxSizing: "border-box" }}
      >
        <p
          style={{
            color: "0a2647",
            fontSize: "35px",
            fontWeight: "700",
            lineHeight: "45px",
            margin: "20px 0",
          }}
        >
          Input your OTP
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
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please input your OTP!",
                },
              ]}
            >
              <Input
                prefix={<ApiOutlined className="site-form-item-icon" />}
                placeholder="ex: 123456"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loadings}
              >
                Verify
              </Button>
              Or <NavLink to={"/signup"}>Registered an account!</NavLink>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </>
  );
};

export default OtpVerify;
