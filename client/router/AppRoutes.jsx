import React from "react";
import { Route, Routes, Link } from "react-router-native";

import { StatusBar } from "expo-status-bar";

import RichardPage from "../devpages/RichardPage.jsx";
import SecundaryRoutes from "./secundaryRoutes";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";


export default function AppRoutes() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes>
        <Route path="/sisisi" element={<RichardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/*" element={<SecundaryRoutes />} />
      </Routes>
    </>
  );
}
