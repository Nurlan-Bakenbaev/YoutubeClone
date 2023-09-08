import


const axios = require("axios");

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/captions",
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "dfd9fd22a4msh387268f5a8f5fb7p1284fdjsne6bbd54d9622",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
