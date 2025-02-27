import Link from "next/link";
import Socials from "../Socials";

const Header = () => {
  return (
    <header className='absolute z-8 w-full flex items-center px-16 xl:px-0 xl:h-[90px] '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center py-6'>
          {/* Logo */}
          <Link href="/">
            <h3 className='flex lg:pt-4'>
              MADINY.<span className='text-accent'>TATTOO</span>
            </h3>
          </Link>
          <div>
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
