import React from "react";
import Head from "next/head";
import { ProfilePageBlock } from "components";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Личный кабинет || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfilePageBlock link={"profile"} />
    </>
  );
};

export default ProfilePage;