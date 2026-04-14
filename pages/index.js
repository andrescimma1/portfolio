import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { siteMeta } from "../data/siteContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMeta.title.en}</title>
        <meta name="description" content={siteMeta.description.en} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
