import React from "react";
import Footer from "../../components/layout/Footer";
import styles from "./Login.module.scss";
import LoginForm from "./components/LoginForm";
import useAuth from "../../contexts/Auth/useAuth";

const Login = () => {
  // const isHeaderOpen = props.active ? 'active' : 'muted';
  // ReactGA.initialize("UA-176775736-1");
  // ReactGA.pageview("/signup");
  const { loginWithEmail } = useAuth();
  const handleSubmit = (data: any) => {
    loginWithEmail;
  };

  return (
    <div className="signup">
      {/* <div className={`signup ${isHeaderOpen}`}> */}
      <div className="content">
        <div className="text">
          <h3>Let&apos;s get started.</h3>
          <ol>
            <li>
              <p>
                Please use your{" "}
                <strong> organization&apos;s Berkeley email </strong> to
                register. We will be using your CalLink email to verify your
                club.{" "}
              </p>
            </li>
            <li>We&apos;ll send a confirmation link to your club email.</li>
            <li>Click on the confirmation link to sign into sproul.club.</li>
            <li>Begin creating and editing your organization&apos;s page!</li>
          </ol>
        </div>
        <LoginForm onSubmit={handleSubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
