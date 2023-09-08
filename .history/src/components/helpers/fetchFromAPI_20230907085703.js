import axios from "axios";


const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions";

const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": 'dfd9fd22a4msh387268f5a8f5fb7p1284fdjsne6bbd54d9622',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
