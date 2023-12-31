import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";
import React from "react";
import SpecimenProvider from "../context/contextProvider";
import Navbar from "../components/Navbar";
import theme from "../utils/theme";
import { ThemeProvider } from "@mui/material";
import Footer from "../components/footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/logo.jpeg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  function Loader() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      router.events.on(
        "routeChangeStart",
        (url) => url !== router.asPath && setLoading(true)
      );
      router.events.on(
        "routeChangeComplete",
        (url) => url === router.asPath && setTimeout(setLoading(false), 5000)
      );
      router.events.on(
        "routeChangeError",
        (url) => url === router.asPath && setTimeout(setLoading(false), 5000)
      );

      return () => {
        router.events.off(
          "routeChangeStart",
          (url) => url !== router.asPath && setLoading(true)
        );
        router.events.off(
          "routeChangeComplete",
          (url) => url === router.asPath && setTimeout(setLoading(false), 5000)
        );
        router.events.off(
          "routeChangeError",
          (url) => url === router.asPath && setTimeout(setLoading(false), 5000)
        );
      };
    });
    return loading && <div className="loadingContainer">
      <span class="loader"></span>
    </div>;
  }

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeff-Realty & Trade Solution</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="En" />
      </Helmet>
      <Loader />
      <SpecimenProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <FloatingWhatsApp
            phoneNumber="+2348120908844"
            accountName="Jeff Realty"
            allowEsc
            allowClickAway
            notification
            notificationSound
            avatar={logo.src}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </SpecimenProvider>
      <Footer />
    </>
  );
}

export default MyApp;
