"use client";
import { Poppins } from "next/font/google";
import Head from 'next/head';
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
  display: "swap",
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
          <motion.div key={router} className='page bg-primary/40'>
            <Transition />
            <Nav />
            <Header />
            <main>
              <Head>
                <meta property='og:image' content='/opengraph-image.png' />
                <meta
                  property='og:image:secure_url'
                  content='https://madinytattoo.ro/opengraph-image.png'
                />
                <meta property='og:image:type' content='image/png' />
                <meta property='og:image:width' content='751' />
                <meta property='og:image:height' content='500' />
                {/* Additional OG tags as needed */}
              </Head>
              {children}
            </main>
            <Footer />
          </motion.div>
        </body>
      </AnimatePresence>
    </html>
  );
};

export default Layout;
