import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "../contexts/Theme";
import useTheme from "../contexts/Theme/useTheme";
import "../styles/globals.scss";
import { SignIn } from "../pages/clubLogin/ClubLogin.js";
import "../pages/clubLogin/ClubLogin.scss";

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return <SignIn></SignIn>;
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
