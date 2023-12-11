"use client";
import { Poppins } from "next/font/google";
import  dynamic from 'next/dynamic'
// COMPONENTS
const Nav = dynamic(() => import("../components/Nav"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const Transition = dynamic(() => import("../components/Transition"), { ssr: false });


// ROUTER
import { usePathname } from "next/navigation";

// FRAMER MOTION
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