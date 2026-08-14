import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContact from "../components/FloatingContact";
import PageTransition from "../components/PageTransition";
import JsonLd from "../components/JsonLd";
import { constructMetadata } from "../lib/utils";
import { localBusinessSchema, websiteSchema } from "../lib/schema";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
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
    <html lang="ro" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <JsonLd schema={[localBusinessSchema, websiteSchema]} />
        <div className="grain-overlay" aria-hidden="true" />

        <Header />

        <main id="continut">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
