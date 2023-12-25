"use client";
import { Poppins } from "next/font/google";
// Component
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Transition from "./Transition";
// Router
import { usePathname } from "next/navigation";
// Framer
import { AnimatePresence, motion } from "framer-motion";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});

const Layout = ({ children, backgroundClass }) => {
  const router = usePathname();
  return (
    <html
      lang='ro'
      className='bg-site bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-center relative'
    >
      <AnimatePresence mode='wait'>
        <body className={`${poppins.className} ${backgroundClass} `}>
          <motion.div key={router} className="page bg-primary/40">
            <Transition />
            <Nav />
            <Header />
            {children}
            <Footer />
          </motion.div>
        </body>
      </AnimatePresence>
    </html>
  );
};

export default Layout;