import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { Layout, theme, Button, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  const bread = window.location.pathname.split("/").slice(1);

  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <SideBar btnCollapsed={collapsed} />
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            KANBAN BOARD
          </Header>

          <Content
            style={{
              margin: "16px 16px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            KANBAN Board ©{new Date().getFullYear()} Created by AL AMIN ET
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default RootLayout;
