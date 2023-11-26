import Image from "next/image";
import topLeft from "../../public/top-left-img.png"

const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
    <Image src={topLeft} width={400} height={400} alt="top-left-img-layout"/>
  </div>;
};

export default TopLeftImg;
