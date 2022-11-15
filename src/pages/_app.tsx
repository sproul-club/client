import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "../contexts/Theme";
import useTheme from "../contexts/Theme/useTheme";
import "../styles/globals.scss";
import { SignIn } from "../pages/clubLogin/ClubLogin.js";
import Landing from "../pages/landing/Landing.js";
import Navbar from "../components/layout/navbar/Navbar.js";
import "../pages/clubLogin/ClubLogin.scss";
import "../pages/landing/Landing.scss";
import "../components/layout/navbar/Navbar.scss";
import "../pages/card/Card.scss";

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <SignIn></SignIn> */}
      <Landing></Landing>
    </div>
  );
};

// interface AppLogicProps {
//   children: ReactNode;
// }

// const AppLogic = ({ children }: AppLogicProps) => {
//   const { theme } = useTheme();

//   useEffect(() => {
//     document.querySelector("body")?.setAttribute("class", theme);
//   }, [theme]);

//   return <>{children}</>;
// };

export default AppWrapper;