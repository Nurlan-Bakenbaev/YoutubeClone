import axios from "axios";
import '../.././env';
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "10",
  },
  headers: {
    "X-RapidAPI-Key":  process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
// my second account
//"X-RapidAPI-Key": 'dfd9fd22a4msh387268f5a8f5fb7p1284fdjsne6bbd54d9622',
//"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
