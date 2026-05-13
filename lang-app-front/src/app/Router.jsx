import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ExpressionExplorer from "@/pages/ExpressionExplorer.jsx";
import MyLibrary from "@/pages/MyLibrary.jsx";
import PracticeArena from "@/pages/PracticeArena.jsx";
import LoginForm from "@/components/auth/LoginForm.jsx";
import SignupForm from "@/components/auth/SignupForm.jsx";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />}>
          <Route index element={<ExpressionExplorer />} />
          <Route path="collection" element={<MyLibrary />} />
          <Route path="test" element={<PracticeArena />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="forgot-password" element={<ForgotPasswordForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
