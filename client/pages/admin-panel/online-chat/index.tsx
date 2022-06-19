import React from "react";
import Head from "next/head";
import { ChatPage } from "components";

const OnlineChat = () => {
  return (
    <div>
      <Head>
        <title>Онлайн чат || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChatPage />
    </div>
  );
};

export default OnlineChat;