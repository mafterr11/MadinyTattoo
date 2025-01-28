// app/page.tsx or any other page in the App Router
"use client";

import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Navigates back to the previous page
  };

  return (
    <button
      onClick={handleBackClick}
      className='flex items-center justify-center gap-x-1 border-white/40 border py-1 px-4 rounded-[5px] hover:cursor-pointer'
    >
      Înapoi <FaArrowRight className='fill-accent' />
    </button>
  );
}

export default BackButton;
