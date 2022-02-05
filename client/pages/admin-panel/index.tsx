import React from "react";
import Head from "next/head";
import { MainPage } from "../../components";

const AdminPanelPage = () => {
  return (
    <>
      <Head>
        <title>Админ-панель || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
};

export default AdminPanelPage;