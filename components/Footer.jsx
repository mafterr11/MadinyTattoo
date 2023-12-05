import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='container px-5 py-8 mx-auto flex items-center justify-evenly sm:flex-row flex-col pb-24 md:pb-4'>
        <div>
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
