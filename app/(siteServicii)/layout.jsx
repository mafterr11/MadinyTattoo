import "../globals.css";
import Layout from "../../components/Layout";

export default function RootLayout({ children }) {
  return <Layout backgroundClass="bg-servicii bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-[center_right_-18rem] xs:bg-[center_right_-16rem] md:bg-center relative">{children}</Layout>;
}
