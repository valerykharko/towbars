import React from "react";
import Head from "next/head";
import { AboutUsBlock, Footer } from "components";

const About = () => {
  return (
    <>
      <Head>
        <title>О нас || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUsBlock />
      <Footer />
    </>
  );
};

export default About;
