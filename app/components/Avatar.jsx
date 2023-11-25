import Image from "next/image";
import avatar from "../../public/Avatar.png"

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={avatar} alt="page decoration" width={737} height={678}/>
  </div>;
};

export default Avatar;
