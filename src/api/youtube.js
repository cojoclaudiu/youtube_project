import axios from 'axios';

export const youtubeVideo = (videoId) =>
  axios.create({
    baseURL: `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${getRandomAPI()}`,
  });

export const relatedVideos = (videoId) =>
  axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&type=video&key=${getRandomAPI()}`,
    cancelToken: source.token,
  });

