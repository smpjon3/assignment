import { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      import("webfontloader").then((WebFont) => {
        WebFont.load({
          google: {
            families: ["Inter:400,500,700", "Open Sans:600"],
          },
        });
      });
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Equityset</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
