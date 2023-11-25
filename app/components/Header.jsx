import Link from "next/link";
import Image from "next/image";
// Image
import Logo from "../../public/logo.svg";
// Component
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-6'>
          {/* logo */}
          <Link href={"/"}>
            <h2 className="h2">Madiny.<span className="text-accent">Tattoo</span></h2>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
