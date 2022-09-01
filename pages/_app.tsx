import React from "react";
import "../styles/tailwind.css";
import Theme from "../styles/Theme";
// @ts-ignore
import { ThemeProvider } from "@wigxel/react-components";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useRouter } from 'next/router';
import LoadingScreen from "../components/molecules/LoadingScreen";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      {
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
      }

    </>
  );
}
