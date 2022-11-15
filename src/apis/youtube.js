import axios from "axios";

const KEY = "AIzaSyBmnQ8BCNyNfcz63ydVCF_nDQtwQ6bv3Rk";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
