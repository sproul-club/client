import type { AppProps } from 'next/app';
import { HTMLProps, ReactNode, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { AuthProvider } from '../contexts/Auth';
import { ThemeProvider } from '../contexts/Theme';
import useTheme from '../contexts/Theme/useTheme';
import '../styles/globals.scss';

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <App>
          <Component {...pageProps} />
        </App>
      </ThemeProvider>
    </AuthProvider>
  );
};

const App = ({ children }: HTMLProps<any>) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.querySelector('body')?.setAttribute('class', theme);
  }, [theme]);

  return <Layout>{children}</Layout>;
};

function Layout({ children }: HTMLProps<any>) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppWrapper;
