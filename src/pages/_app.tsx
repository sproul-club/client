import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "../contexts/Theme";
import useTheme from "../contexts/Theme/useTheme";
import { SignIn } from "../pages/clubLogin/ClubLogin.js";
import "../styles/globals.scss";
import "../pages/clubLogin/ClubLogin.scss";
import "../pages/landing/Landing.scss";


const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AppLogic>
        <Component {...pageProps} />
      </AppLogic>
    </ThemeProvider>
  );
};

interface AppLogicProps {
  children: ReactNode;
}

const AppLogic = ({ children }: AppLogicProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.querySelector("body")?.setAttribute("class", theme);
  }, [theme]);

  return <>{children}</>;
};

export default AppWrapper;
