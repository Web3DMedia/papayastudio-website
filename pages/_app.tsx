import React, { useEffect } from "react";
import "../styles/tailwind.css";
import Theme from "../styles/Theme";

import AOS from "aos";
import "aos/dist/aos.css";
// @ts-ignore
import { ThemeProvider } from "@wigxel/react-components";
import Head from "next/head";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import { useRouter } from 'next/router';
// import LoadingScreen from "../components/molecules/LoadingScreen";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  // React.useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== router.pathname ? setPageLoading(true) : setPageLoading(true)
  //   }
  //   const handleComplete = (url) => { setPageLoading(false) }
  //   // const handleStart = () => { setPageLoading(true); };
  //   // const handleComplete = () => { setPageLoading(false); };

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);
  // }, [router]);
  // // useEffect(() => {
  // //   setPageLoading(true);

  // //   setTimeout(() => {
  // //     setPageLoading(false);
  // //   }, 5500);
  // // }, []);

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1500,
    });
  });
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      {/* {
        pageLoading ? (<LoadingScreen></LoadingScreen>) : <GoogleReCaptchaProvider
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
      // } */}
      <>
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    </>
  );
}
