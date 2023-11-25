import "./globals.css";
// COMPONENTS
import Layout from "./components/Layout";

export const metadata = {
  title: "Madiny Tattoo",
  description: "",
  keywords: "",
};

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}
