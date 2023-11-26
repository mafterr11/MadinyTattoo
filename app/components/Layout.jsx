"use client";
import { Poppins } from "next/font/google";
// Components
import Nav from "./Nav";
import Header from "./Header";
import Transition from "./Transition";
import TopLeftImg from "./TopLeftImg";

// Router
import { usePathname } from "next/navigation";

// Framer
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
      className='bg-site bg-cover bg-no-repeat bg-fixed bg-center relative'
    >
      <AnimatePresence mode='wait'>
        <body className={`${poppins.className} page text-white`}>
          <motion.div key={router} className='h-full bg-primary/70'>
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
