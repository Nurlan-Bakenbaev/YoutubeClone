import React from "react";
import ChannelCard from "./ChannelCard";
const MyChannel = () => {
  return (
    <div className="text-white">
      <div className="relative w-full h-[180px] flex items-center justify-center overflow-hidden z-[10]">
        <img
          src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <input className="hidden" name="file" type="file" />
        <label className="absolute bottom-10 left-10 z-[20] " htmlFor="file">
          upload photo
        </label>
      </div>
      <div className="flex  justify-center mt-[-90px] relative z-[20]">
        <div className="w-[220px] h-[220px] rounded-full border overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MyChannel;
