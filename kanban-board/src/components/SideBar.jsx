import React, { useState } from "react";
import {
  GlobalOutlined,
  UserOutlined,
  FundProjectionScreenOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loginuser } from "../features/Slice/UserSlice";
const { Header, Sider, Content } = Layout;

const SideBar = ({ btnCollapsed }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handelLoggedOut = () => {
    localStorage.removeItem("users");
    dispatch(Loginuser(null));
    navigate("/");
  };
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
              icon: <HomeOutlined />,
              label: <NavLink to="/">Home</NavLink>,
            },
            {
              key: "2",
              icon: <FundProjectionScreenOutlined />,
              label: <NavLink to="/dashboard">Dashboard</NavLink>,
            },
            {
              key: "3",
              icon: <GlobalOutlined />,
              label: <NavLink to="/notification">Notification</NavLink>,
            },
            {
              key: "4",
              icon: <UserOutlined />,
              label: <NavLink to="/profile">Profile</NavLink>,
            },

            {
              key: "5",
              icon: <LogoutOutlined />,
              label: "Logout",
              onClick: handelLoggedOut,
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default SideBar;
