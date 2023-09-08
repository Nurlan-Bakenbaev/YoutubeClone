import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "./helpers/fetchFromAPI";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideous] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideous(data?.items)
    );
  }, [id]);

  console.log(channelDetail);
  return (
    <Box minHeight="95vh">
      <div className="bg-gray-500 z-10 h-[300px]">
        <img src={""} alt="Logo" />
      </div>
      <ChannelCard
        channelDetails={
          channelDetail.brandingSettings.channel.image.bannerExternalUrl
        }
        mt="-110px"
      />
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
