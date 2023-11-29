"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "acasa", path: "/", icon: <HiHome /> },
  { name: "despre", path: "/despre", icon: <HiUser /> },
  { name: "servicii", path: "/servicii", icon: <HiRectangleGroup /> },
  { name: "proiecte", path: "/proiecte", icon: <HiViewColumns /> },
  {
    name: "testimoniale",
    path: "/testimoniale",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex flex-col items-center gap-y-4 fixed h-max bottom-0 xl:right-[2%] w-full xl:w-16 xl:max-w-md z-50  xl:justify-center xl:h-screen text-black'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-[#FDF9EE] backdrop-blur-sm text-3xl xl:text-2xl xl:rounded-full border-[1px] border-black/70 rounded'>
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && `text-accent`
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className='absolute pr-16 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[12px] rounded-[3px]'>
                  <div className='text-[18px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                  </div>
                </div>
              </div>
              {/* icons */}
              <div >{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
