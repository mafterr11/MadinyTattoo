import { Poppins } from "next/font/google";
import "./globals.css";
// COMPONENTS
import Layout from "./components/Layout";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Madiny Tattoo",
  description: "",
  keywords: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} page  ${poppins.variable} font-poppins relative bg-site text-white  bg-cover bg-no-repeat bg-fixed bg-center`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
