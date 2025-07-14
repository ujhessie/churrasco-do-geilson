import { CircleUser, Grip } from "lucide-react";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header className=" z-20  w-full shadow ">
      <div className=" p-2 py-4 flex justify-between items-center ">
        <p className="text-gray-500 font-extrabold leading-[100%]">CHURRASCO <br/> DO GEILSON</p>
        <div className="flex gap-1 items-center">
          <Button icon={<CircleUser />}>LOGIN</Button>
          <div className="icon-menu p-1 bg-white hover:bg-orange-500 rounded-md cursor-pointer hover:text-white">
            <Grip className="text-gray-600 w-[24px] h-[24px] " />
          </div>
        </div>
      </div>
    </header>
  );
};
