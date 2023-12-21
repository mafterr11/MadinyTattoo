import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col pb-24 xl:pb-4 md:gap-x-6 relative z-[2]'>
        <div className="md:text-xl lg:text-2xl xl:text-base">
          Creat de {" "}
          <Link
            href='https://www.linkedin.com/in/maftei-alexandru/'
            target='blank'
            className='hover'
          >
            <span className='text-accent hover:text-white'>Maftei Alexandru</span>
          </Link>
        </div>
        <div>
          <p className="md:text-xl lg:text-2xl xl:text-base">© All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
