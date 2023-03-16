import { ReactNode } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
