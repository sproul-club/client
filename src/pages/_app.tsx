import type { AppProps } from 'next/app';
import { HTMLProps, ReactNode, useEffect } from 'react';
import '../../String.extensions';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { AuthProvider } from '../contexts/Auth';
import { ThemeProvider } from '../contexts/Theme';
import useTheme from '../contexts/Theme/useTheme';
import '../styles/globals.scss';
import awsconfig from './../aws-exports';
import {Amplify, Auth} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ThemeProvider>
          <Authenticator.Provider>

        <App>
          <Component {...pageProps} />
        </App>
          </Authenticator.Provider>

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
      <NavBar authenticated={false} hasClub={true} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppWrapper;
