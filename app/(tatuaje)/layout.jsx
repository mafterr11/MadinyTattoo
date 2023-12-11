import "../globals.css";
import Layout from "../../components/Layout";

export default function RootLayout({ children }) {
  return <Layout backgroundClass="bg-tatuaje bg-cover  bg-no-repeat bg-scroll lg:bg-fixed bg-center relative">{children}</Layout>;
}
