import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "../contexts/Theme";
import useTheme from "../contexts/Theme/useTheme";
import "../styles/globals.scss";
import { SignIn } from "../pages/clubLogin/ClubLogin.js";
import "../pages/clubLogin/ClubLogin.scss";
import { Card } from "./card/Card";
import "../pages/card/Card.scss";

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SignIn></SignIn>
      <Card
        clubName={"Web Development @ Berkeley"}
        appReq={true}
        open={true}
        desc={
          "Helping students to develop their coding & design skills in web dev."
        }
      />
    </>
  );
  // return ;
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
