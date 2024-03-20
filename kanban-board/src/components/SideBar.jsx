import React, { useState } from "react";
import {
  GlobalOutlined,
  UserOutlined,
  FundProjectionScreenOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;

const SideBar = ({ btnCollapsed }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Sider trigger={null} collapsible collapsed={btnCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "2",
              icon: <FundProjectionScreenOutlined />,
              label: "Dashboard",
            },
            {
              key: "3",
              icon: <GlobalOutlined />,
              label: "Notification",
            },
            {
              key: "4",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default SideBar;
