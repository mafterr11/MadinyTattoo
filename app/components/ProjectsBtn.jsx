import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import roundedText from "../../public/rounded-white-bold.png";

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href='/proiecte' className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image src={roundedText} width={141} height={148} alt="projects button" className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'/>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
