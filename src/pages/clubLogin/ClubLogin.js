import React from "react";
// import "./ClubLogin.scss";
// import Footer from "../../components/layout/footer/Footer";
import ClubLoginForm from "./ClubLoginForm.js";
import Image from "next/image";
import loginImage from "../assets/login.png";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="content">
        <div className="loginImage">
          <Image src={loginImage} alt="bears"></Image>
        </div>
        {/* <img src={loginImage} className="loginImage" alt="bears" /> */}
        <div className="form">
          <ClubLoginForm />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export { SignIn };
