import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "10",
  },
  headers: {
            //change the name of this file to fetchFromAPI
    "X-RapidAPI-Key": //YOUR API FROM UTUBE 3  RAPID API,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

