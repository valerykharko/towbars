import React from "react";
import Head from "next/head";
import AdminTowbars from "components/AdminPanel/db/AdminTowbars";

const AdminDbTowbarsPage = () => {
  return (
    <>
      <Head>
        <title>Админ-панель || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminTowbars />
    </>
  );
};

export default AdminDbTowbarsPage;
