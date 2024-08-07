"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
// Component
import Footer from "../components/layout/Footer";
import Transition from "../components/Transition";
import { AnimatePresence, motion } from "framer-motion";

// Router
import { usePathname } from "next/navigation";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  const currentRoute = usePathname();

  return (
    <html
      lang="ro"
      className="bg-site bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-center relative"
    >
      <AnimatePresence mode="wait">
        <body className={`${poppins.className}`}>
          <motion.div key={currentRoute} className="page bg-primary/40">
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
