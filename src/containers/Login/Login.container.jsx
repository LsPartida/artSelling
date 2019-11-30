import React from "react";
// * Components
import LoginComponent from "./components/Form.component";
import NavbarHome from "../../shared/components/NavbarHome/NavbarHome.component";
// * Styles
import "./Login.container.css";

const LoginContainer = () => {
  return (
    <div className="login-component">
      <NavbarHome />
      <LoginComponent />
    </div>
  );
};

export default LoginContainer;
