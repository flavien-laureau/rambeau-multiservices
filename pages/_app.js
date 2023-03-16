import "../styles/globals.scss";
import Layout from "../src/components/layout/Layout";
import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-23R99L7595`}
        strategy="afterInteractive"
      />
      {/*Google tag (gtag.js)*/}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-23R99L7595');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
