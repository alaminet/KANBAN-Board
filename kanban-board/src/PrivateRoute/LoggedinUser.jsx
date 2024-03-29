import React from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { Outlet } from "react-router-dom";

const LoggedinUser = () => {
  const user = useSelector((users) => users.loginSlice.login);
  return user ? <Outlet /> : <Login />;
};

export default LoggedinUser;
