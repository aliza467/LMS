import React from "react";  
import { Navigate, Outlet } from "react-router-dom";  

const ProtectedRoute = () => {
  return localStorage.getItem("userId") ? <Outlet /> : <Navigate to={"/dashboard"} />;     
};
  
export default ProtectedRoute;