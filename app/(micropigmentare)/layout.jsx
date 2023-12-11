import "../globals.css";
import Layout from "../../components/Layout";

export default function RootLayout({ children }) {
  return <Layout backgroundClass="bg-micropigmentare2 md:bg-micropigmentare bg-cover bg-no-repeat bg-fixed bg-center relative">{children}</Layout>;
}
