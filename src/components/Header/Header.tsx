import { Grip } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-[50px] z-20  w-full">
      <div className=" p-2 flex justify-end items-center">
        {/* <p>Churrasco do Geilson</p> */}
        <div className="icon-menu p-2 bg-white hover:bg-orange-500 rounded-md cursor-pointer">
          <Grip className="text-gray-600 w-[20px] h-[20px] " />
        </div>
      </div>
    </header>
  );
};
