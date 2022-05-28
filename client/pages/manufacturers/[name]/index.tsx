import React from "react";
import Head from "next/head";
import axios from "axios";
import { ManufacturerBlock } from "components";
import { IManufacturer } from "interfaces/manufacturer";
import Footer from "components/Footer/Footer";

interface ManufacturerPageProps {
  manufacturer: IManufacturer;
}

const ManufacturerPage = ({ manufacturer }: ManufacturerPageProps) => {
  return (
    <>
      <Head>
        <title>{manufacturer.name} || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManufacturerBlock manufacturer={manufacturer} />
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const name = query.name;
  const { data: manufacturer } = await axios.get<IManufacturer>(
    `${process.env.API_URL}/api/manufacturers/byName/${name}`
  );

  return { props: { manufacturer } };
};

export default ManufacturerPage;
