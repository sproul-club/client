import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import { AuthProvider } from "../contexts/Auth";
import { ThemeProvider } from "../contexts/Theme";
import useTheme from "../contexts/Theme/useTheme";
import "../styles/globals.scss";

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppLogic>
          <Component {...pageProps} />
        </AppLogic>
      </AuthProvider>
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
