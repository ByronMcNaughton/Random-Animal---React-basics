import axios from "axios";

const ACCESS_KEY = require("./setup")["ACCESS_KEY"];

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID " + ACCESS_KEY,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
