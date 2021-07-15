import axios from 'axios';

const getRandomAPI = () => {
  const APIsUSTD = [
    'AIzaSyDFxK1zpsZJ2x_MmEUtiqUYuk6k8NPfLUM',
    'AIzaSyBCuAiUJs55mQy4fl9ycACFTwrytY8qGcY',
    'AIzaSyDkEjQrUUV8eXp5KNhuZRAAh0zktDdl5lE',
    'AIzaSyB9vXmreuu8fhJWoB8hYlsQW4j7PdUsjdc',
    'AIzaSyBNgl5w_NLUnAVU52K9qY5GMeVOnx7nHbE',
  ];

  // APIsCJC = [
  //   "AIzaSyDMbBScdqophxy9B2bfOBDVMkPkSnR82QI",
  //   "AIzaSyBw2ubQebXuiC7bzXRP-J2g9ZVjqB05uWs",
  //   "AIzaSyCOggM89-dTxeCUYfv-KWezYld17jdEITA",
  //   "AIzaSyDCZfNWAa_sZ3y5zHZ7c0i7epoR2cvM-Ds",
  //   "AIzaSyAg_nIGEp8UTuSg9RjZHD_rMf4EpsA-cMU",
  //   "AIzaSyCFdvWjCQl2ilT4Asg9l5x1ugnBiDGwxRY"
  // ]

  return APIsUSTD[Math.floor(Math.random(APIsUSTD.length) * APIsUSTD.length)];
};

export const youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${getRandomAPI()}`,
});

export const youtubeVideo = (videoId) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${getRandomAPI()}`,
  });

export const relatedVideos = (videoId) =>
  axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&type=video&key=${getRandomAPI()}`,
  });

export const searchVideo = (keyword) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${getRandomAPI()}`,
  });

export const avatar = (id) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${getRandomAPI()}`,
  });
