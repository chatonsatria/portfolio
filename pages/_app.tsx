import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";
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
      <ThemeProvider attribute="class" defaultTheme="system">
        <section className="font-poppins flex flex-col justify-between min-h-screen py-8">
          <div>
            <Navbar />
            <div className="flex w-full max-w-7xl mx-auto px-11 md:px-20">
              <Component {...pageProps} />
            </div>
          </div>
          <div className="flex w-full max-w-7xl mx-auto px-11 md:px-20">
            <Footer />
          </div>
        </section>
      </ThemeProvider>
    </StoreContextProvider>
  );
}

export default MyApp;
