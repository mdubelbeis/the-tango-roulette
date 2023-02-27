import Head from "next/head";
import React from "react";
import Header from "./ui/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>The Tango Roulette</title>
        <meta name="description" content="Tango cohort web apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
