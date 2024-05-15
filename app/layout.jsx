import LayoutContent from "./LayoutContent";
import "./globals.css";
import { constructMetadata } from "../lib/utils";
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
