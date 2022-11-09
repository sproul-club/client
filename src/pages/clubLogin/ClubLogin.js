import React from "react";
// import "./ClubLogin.scss";
// import Footer from "../../components/layout/footer/Footer";
import ClubLoginForm from "./ClubLoginForm.js";
import Image from "next/image";
import loginImage from "../assets/signup.png";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="content">
        <div className="loginImage">
          <Image src={loginImage} alt="bears"></Image>
        </div>
        <div className="loginForm">
          <ClubLoginForm />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export { SignIn };
