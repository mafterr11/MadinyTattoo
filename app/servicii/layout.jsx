"use client";
import Footer from "../../components/Footer";
import { usePathname } from "next/navigation";
export default function ServiciiLayout({ children }) {
  const currentRoute = usePathname();
  return (
    <div className='bg-servicii bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-[center_right_-18rem] xs:bg-[center_right_-16rem] md:bg-center relative'>
      <div className='page bg-primary/40'>
        {children}
        {currentRoute === "/servicii" ? <Footer /> : null}
      </div>
    </div>
  );
}
