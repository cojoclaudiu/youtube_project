import axios from 'axios';

const getRandomAPI = () => {
  const APIsUSTD = [
    'AIzaSyDFxK1zpsZJ2x_MmEUtiqUYuk6k8NPfLUM',
    'AIzaSyBCuAiUJs55mQy4fl9ycACFTwrytY8qGcY',
    'AIzaSyDkEjQrUUV8eXp5KNhuZRAAh0zktDdl5lE',
    'AIzaSyB9vXmreuu8fhJWoB8hYlsQW4j7PdUsjdc',
    'AIzaSyBNgl5w_NLUnAVU52K9qY5GMeVOnx7nHbE',
  ];

  return APIsUSTD[Math.floor(Math.random(APIsUSTD.length) * APIsUSTD.length)];
};

export const source = axios.CancelToken.source();

export const youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${getRandomAPI()}`,
  cancelToken: source.token,
});

export const youtubeVideo = (videoId) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${getRandomAPI()}`,
    cancelToken: source.token,
  });

export const relatedVideos = (videoId) =>
  axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&type=video&key=${getRandomAPI()}`,
    cancelToken: source.token,
  });

export const searchVideo = (keyword) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&key=${getRandomAPI()}`,
    cancelToken: source.token,
  });

export const avatar = (id) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${getRandomAPI()}`,
    cancelToken: source.token,
  });
