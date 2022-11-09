import React from "react";
import "./StudentLogin.scss";
// import Footer from "../../components/layout/footer/Footer";
import StudentLoginForm from "./StudentLoginForm.js";
import Image from "next/image";
import loginImage from "../assets/singup.png";

const StudentLogin = () => {
  return (
    <div className="signin">
      <div className="content">
        <img src={loginImage} className="loginImage" alt="bears" />
        <Image src={loginImage} alt="bears"></Image>
        <div className="form">
          <StudentLoginForm />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export { StudentLogin };
