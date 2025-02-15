import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (!token) return <Navigate to="/login" replace />; // Redirect to login if no token

  if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" replace />; // Restrict access

  return <Outlet />;
};

export default PrivateRoute;
