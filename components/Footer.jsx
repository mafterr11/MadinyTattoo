import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='container px-5 py-8 mx-auto flex items-center justify-evenly sm:flex-row flex-col pb-24 xl:pb-4 relative z-[2]'>
        <div className="md:text-xl lg:text-2xl xl:text-base">
          Made by{" "}
          <Link
            href='https://www.linkedin.com/in/maftei-alexandru/'
            target='blank'
            className='hover'
          >
            <span className='text-accent hover:text-white'>Maftei</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
