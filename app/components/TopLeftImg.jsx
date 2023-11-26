import Image from "next/image";
import topLeft from "../../public/bird.png"

const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 z-10 w-[200px] xl:w-[400px] animate-pulse">
    <Image src={topLeft} width={400} height={400} alt="top-left-img-layout"/>
  </div>;
};

export default TopLeftImg;
