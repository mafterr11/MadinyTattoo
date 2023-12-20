"use client";
// Link
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons
import {
  LiaHomeSolid,
  LiaUserSolid,
  LiaEnvelopeSolid,
  LiaComments,
  LiaImageSolid,
  LiaLayerGroupSolid
} from "react-icons/lia";
// Data
export const navData = [
  { name: "acasa", path: "/", icon: <LiaHomeSolid /> },
  { name: "despre", path: "/despre", icon: <LiaUserSolid /> },
  { name: "servicii", path: "/servicii", icon: <LiaLayerGroupSolid /> },
  { name: "proiecte", path: "/proiecte", icon: <LiaImageSolid /> },
  { name: "testimoniale", path: "/testimoniale", icon: <LiaComments /> },
  { name: "contact", path: "/contact", icon: <LiaEnvelopeSolid /> },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex flex-col items-center gap-y-4 fixed h-max bottom-0 xl:right-[2%] w-full xl:w-16 xl:max-w-md z-[8]  xl:justify-center xl:h-screen text-white'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-12 xl:px-0 h-[80px] xl:h-max py-8 bg-black/60 backdrop-blur-sm text-3xl xl:text-2xl xl:rounded-full border-[1px] border-black/70'>
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && `text-accent`
                } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* Tooltip */}
              <div className='absolute pr-16 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[12px] rounded-[3px] border-solid border-black border-[1px]'>
                  <div className='text-[18px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* Triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* Icons div */}
              <div className="flex flex-col justify-center items-center gap-y-1">
                {/* Icons */}
                <div className='text-3xl md:text-4xl'>
                  {link.icon}
                </div>
                {/* Name */}
                <div className='xl:hidden text-[10px] md:text-[18px] leading-none font-semibold capitalize'>
                  {link.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
