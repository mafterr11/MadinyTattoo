import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContact from "../components/FloatingContact";
import MobileActionBar from "../components/MobileActionBar";
import PageTransition from "../components/PageTransition";
import JsonLd from "../components/JsonLd";
import BookingProvider from "../components/booking/BookingProvider";
import { constructMetadata } from "../lib/utils";
import { localBusinessSchema, websiteSchema } from "../lib/schema";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = constructMetadata();

export const viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={poppins.variable}>
      <body>
        <BookingProvider>
          <JsonLd schema={[localBusinessSchema, websiteSchema]} />
          <div className="grain-overlay" aria-hidden="true" />

          <Header />

          <main id="continut">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
          <FloatingContact />
          <MobileActionBar />
        </BookingProvider>
      </body>
    </html>
  );
}
