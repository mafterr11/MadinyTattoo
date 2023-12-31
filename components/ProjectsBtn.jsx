// Image
import Image from "next/image";
import roundedText from "../public/rounded-white-bold.webp";
// Link
import Link from "next/link";
// Image
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 '>
      <Link
        href='/proiecte'
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group hover:text-accent'
      >
        <Image
          src={roundedText}
          width={141}
          height={148}
          alt='Buton Proiectele Mele'
          className='animate-spin-slow max-w-[141px] max-h-[148px]'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-500' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
