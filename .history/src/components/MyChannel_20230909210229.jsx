import React from "react";
import ChannelCard from "./ChannelCard";
const MyChannel = () => {
  return (
    <div className="text-white">
      <div className="w-full h-[180px] flex items-center justify-center overflow-hidden">
        {" "}
        <img
          className=""
          src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="flex  justify-center">
        <div className="w-[220px] h-[220px] rounded-full border overflow-hidden">
          {" "}
          <img
            src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default MyChannel;
