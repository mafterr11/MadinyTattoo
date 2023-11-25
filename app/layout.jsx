import "./globals.css";
// COMPONENTS
import Layout from "./components/Layout";




export const metadata = {
  title: "Madiny Tattoo",
  description: "",
  keywords: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className="bg-site text-white  bg-cover bg-no-repeat bg-fixed bg-center">
        <Layout>{children}</Layout>
    </html>
  );
}
