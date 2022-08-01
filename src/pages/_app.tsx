import type { AppProps } from "next/app";
import { useEffect } from "react";
import useTheme from "../contexts/Theme/useTheme";

const App = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.querySelector("body")?.setAttribute("class", theme);
  }, [theme]);

  return <Component {...pageProps} />;
};

export default App;
