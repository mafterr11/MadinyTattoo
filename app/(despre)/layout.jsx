import "../globals.css";
import Layout from "../../components/Layout";

export default function RootLayout({ children }) {
  return <Layout backgroundClass="bg-despre bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-[center_right_-25rem] md:bg-center relative">{children}</Layout>;
}
