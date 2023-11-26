// Image
import Image from "next/image";
import topLeft from "../../public/circles.png"

const TopLeftImg = () => {
  return <div className="absolute right-0 bottom-0 z-10 w-[200px] xl:w-[400px] mix-blend-color-dodge animate-pulse duration-75">
    <Image src={topLeft} width={400} height={400} alt="top-left-img-layout"/>
  </div>;
};

export default TopLeftImg;
