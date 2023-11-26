import Link from "next/link";
// Component
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center  py-6'>
          {/* logo */}
          <Link href={"/"}>
            <h3 className='h3'>
              MADINY.<span className='text-accent'>TATTOO</span>
            </h3>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
