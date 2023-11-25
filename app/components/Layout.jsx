"use client";
// COMPONENTS
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import Transition from "./Transition";

// ROUTER
import { usePathname } from "next/navigation";

// FRAMER MOTION
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  const router = usePathname();
  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div key={router} className='h-full'>
          <Transition />
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
