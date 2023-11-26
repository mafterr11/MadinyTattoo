"use client";
import { Poppins } from "next/font/google";
// COMPONENTS
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import Transition from "./Transition";

// ROUTER
import { usePathname } from "next/navigation";

// FRAMER MOTION
import { AnimatePresence, motion } from "framer-motion";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Layout = ({ children }) => {
  const router = usePathname();
  return (
    <html
      lang='en'
      className='bg-site text-white overflow-x-hidden bg-cover bg-no-repeat bg-fixed bg-center relative'
    >
      <AnimatePresence mode='wait'>
        <body className={`${poppins.className} page`}>
          <motion.div key={router} className='h-full '>
            <Transition />
            {/* <TopLeftImg /> */}
            <Nav />
            <Header />
            {children}
          </motion.div>
        </body>
      </AnimatePresence>
    </html>
  );
};

export default Layout;
