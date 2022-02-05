import React from "react";
import Head from "next/head";
import AdminStatistics from "components/AdminPanel/Statistics/AdminStatistics";

const AdminStatisticsPage = () => {
  return (
    <>
      <Head>
        <title>Статистика || Админ-панель</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminStatistics />
    </>
  );
};

export default AdminStatisticsPage;