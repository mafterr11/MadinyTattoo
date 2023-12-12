// Link
import Link from "next/link";
// Icons
import { RiInstagramLine, RiTiktokLine, RiWhatsappLine } from "react-icons/ri";
import { BiPhone } from "react-icons/bi";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-3xl lg:text-4xl xl:text-3xl'>
      <Link
        href={"https://www.instagram.com/madinytattoo/"}
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.tiktok.com/@madiny.tattoo"}
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <RiTiktokLine />
      </Link>
      <a
        href='tel:+40741620774'
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <BiPhone />
      </a>
      <a
        href='http://wa.me/+40741620774'
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <RiWhatsappLine />
      </a>
    </div>
  );
};

export default Socials;
