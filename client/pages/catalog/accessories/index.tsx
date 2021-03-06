import React from "react";
import Head from "next/head";
import { CatalogBlock } from "components/index";

const AccessoryPage = () => {
  return (
    <>
      <Head>
        <title>Каталог аксессуаров || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatalogBlock />
    </>
  );
};

export default AccessoryPage;
