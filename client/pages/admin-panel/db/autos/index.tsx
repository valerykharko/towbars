import React from "react";
import Head from "next/head";
import AdminCars from "components/AdminPanel/db/AdminCars";

const AdminDbAutosPage = () => {
  return (
    <>
      <Head>
        <title>Управление автомобилями || Админ-панель </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminCars />
    </>
  );
};

export default AdminDbAutosPage;
