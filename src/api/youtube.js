import axios from 'axios';

const getRandomAPI = () => 'AIzaSyDu3qUSirCSuF0SY98AC6c783cREbudLkA';

export const source = axios.CancelToken.source();

export const youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${getRandomAPI()}`,
});

export const youtubeVideo = (videoId) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${getRandomAPI()}`,
  });

export const relatedVideos = (videoId) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=5&type=video&key=${getRandomAPI()}`,
  });

export const searchVideo = (keyword) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${keyword}&key=${getRandomAPI()}`,
  });

export const avatar = (id) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${getRandomAPI()}`,
  });
