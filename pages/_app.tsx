import React from "react";
import "../styles/tailwind.css";
import Theme from "../styles/Theme";
// @ts-ignore
import { ThemeProvider } from "@wigxel/react-components";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_TEST_SITE_KEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GoogleReCaptchaProvider>

    </>
  );
}
