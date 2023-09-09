import React from "react";

import AttachmentIcon from "@mui/icons-material/Attachment";
const MyChannel = () => {
  return (
    <div className="text-white">
      <div className="relative w-full h-[180px] flex items-center justify-center overflow-hidden z-[10]">
        <img
          src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="background"
        />
        <div className="absolute top-4 left-4 z-[30]">
          <label
            className="border px-2 py-1 text-xs rounded-lg opacity-[0.8]"
            htmlFor="banner"
          >
            {" "}
            <AttachmentIcon /> Choose Photo
          </label>
          <input
            className="hidden"
            id="banner"
            name="banner"
            type="file"
            value
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <div className="flex  justify-center mt-[-90px] relative z-[20]">
        <div className="w-[220px] h-[220px] rounded-full border overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Account Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default MyChannel;
