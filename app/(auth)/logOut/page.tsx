"use client";
import React from "react";
import { toast } from "react-toastify";
import Logout from "../../component/Logout";

const LogOutPage: React.FC = () => {
  const handleLogoutSuccess = () => {
    toast.success("Logout successful");
  };

  return <Logout onLogoutSuccess={handleLogoutSuccess} />;
};

export default LogOutPage;
