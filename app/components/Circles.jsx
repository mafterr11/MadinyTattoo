import Image from "next/image";
import circles from '../../public/circles.png'

const Circles = () => {
  return <div>
    <Image src={circles} width={260} height={200} className="w-full h-full" />
  </div>;
};

export default Circles;
