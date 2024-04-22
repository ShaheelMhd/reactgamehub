import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a5182fce80044a3f9c37cefb7195a665",
  },
});
