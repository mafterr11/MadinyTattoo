"use client"
import { Poppins } from "next/font/google";

// Component
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
const LayoutContent = ({children}) => {
  const currentRoute = usePathname();

  return (
    <>
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
    </>
  );
};

export default LayoutContent;
