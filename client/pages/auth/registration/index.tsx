import React from "react";
import Head from "next/head";
import RegisterForm from "../../../modules/RegisterForm/components/RegisterForm";

const RegistrationPage = () => {
  return (
    <>
      <Head>
        <title>Регистрация || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterForm />
    </>
  );
};

export default RegistrationPage;
