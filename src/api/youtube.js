import axios from 'axios';

const youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&regionCode=US&key=${REACT_APP_YT_API_KEY}`,
});

export default youtube;
