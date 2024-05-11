"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
// Component
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import { constructMetadata } from "../lib/utils";

// Router
import { usePathname } from "next/navigation";
// Framer
import { AnimatePresence, motion } from "framer-motion";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  const currentRoute = usePathname();
  return (
    <html
      lang='ro'
      className='bg-site bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-center relative'
    >
      <AnimatePresence mode='wait'>
        <body className={`${poppins.className}`}>
          <motion.div key={currentRoute} className='page bg-primary/40'>
            <Transition />
            <Nav />
            <Header />
            {children}
            {currentRoute === "/" ? (
              <Footer />
            ) : currentRoute === "/contact" ? (
              <Footer />
            ) : currentRoute === "/testimoniale" ? (
              <Footer />
            ) : currentRoute === "/proiecte" ? (
              <Footer />
            ) : null}
          </motion.div>
        </body>
      </AnimatePresence>
    </html>
  );
}
