import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NavbarIndex from "../components/organisms/navbar";
import Footer from "../components/organisms/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import StoreContextProvider from "../store/store-context";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <StoreContextProvider>
      <ThemeProvider attribute="class">
        <section className="font-poppins py-8">
          <NavbarIndex />
          <div className="flex w-full max-w-7xl mx-auto px-8 md:px-20">
            <Component {...pageProps} />
          </div>
          <div className="flex w-full max-w-7xl mx-auto px-8 md:px-20">
            <Footer />
          </div>
        </section>
      </ThemeProvider>
    </StoreContextProvider>
  );
}

export default MyApp;
