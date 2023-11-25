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
    <div>
      <AnimatePresence mode='wait'>
        <body className={`${poppins.className} page`}>
          <motion.div key={router} className='h-full'>
            <Transition />
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
          </motion.div>
        </body>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
