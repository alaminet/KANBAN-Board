import React, { useState } from "react";
import { Layout, theme, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import SideBar from "../components/SideBar";

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);

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
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
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
              COntent
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

export default Home;
