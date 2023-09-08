import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "./helpers/fetchFromAPI";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
  }, [id]);

  console.log(channelDetail);
  return (<Box>
    
  </Box>);
};

export default ChannelDetails;
