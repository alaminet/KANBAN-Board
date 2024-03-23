import React from "react";
import { Button, Divider, Flex, Form, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Profile = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div>
        <Divider orientation="left">Profile</Divider>
      </div>
      <div>
        <Form form={form} layout="vertical" style={{ maxWidth: 350 }}>
          <Form.Item label="Username" tooltip="Check your username">
            <Input disabled placeholder="ex: username" />
          </Form.Item>
          <Form.Item
            label="Email"
            tooltip={{
              title: "Check your email",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input disabled placeholder="ex: email@mail.com" />
          </Form.Item>
          <Form.Item
            label="Old Password"
            required
            tooltip={{
              title: "Input Old Password",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input type="password" placeholder="ex: 123456" />
          </Form.Item>
          <Form.Item
            label="New Password"
            required
            tooltip={{
              title: "Input New Password",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input type="password" placeholder="ex: 654321" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Update</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Profile;
