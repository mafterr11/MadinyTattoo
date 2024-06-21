import { constructMetadata } from "../lib/utils";
import LayoutContent from "./LayoutContent";
import "./globals.css";

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html
      lang='ro'
      className='bg-site bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-center relative'
    >
      <LayoutContent children={children} />
    </html>
  );
}
