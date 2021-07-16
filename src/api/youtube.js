import axios from 'axios';

const getRandomAPI = () => {
  // const APIsUSTD = [
  //   'AIzaSyDFxK1zpsZJ2x_MmEUtiqUYuk6k8NPfLUM',
  //   'AIzaSyBCuAiUJs55mQy4fl9ycACFTwrytY8qGcY',
  //   'AIzaSyDkEjQrUUV8eXp5KNhuZRAAh0zktDdl5lE',
  //   'AIzaSyB9vXmreuu8fhJWoB8hYlsQW4j7PdUsjdc',
  //   'AIzaSyBNgl5w_NLUnAVU52K9qY5GMeVOnx7nHbE',
  // ];

  const newQuota = [
    'AIzaSyDonqbkYeWFLc6_BW3THeUj1tEs90_LKOY',
    'AIzaSyBRsYuLbfYsBsl3B0oGCKz07KNffOwvTDs',
    'AIzaSyCVdRzgM5kZFS-YOF67eAizPRq5H0LlPRc',
    'AIzaSyDuNMiA_gxJBd5Ta2Lcc2DSX5CxiNjTFpk',
    'AIzaSyCkfLsl_nQnEPZYgB_r_Vw8jHT2PtGvAGI',
  ];
  return newQuota[Math.floor(Math.random(newQuota.length) * newQuota.length)];
};

export const youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${getRandomAPI()}`,
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
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&key=${getRandomAPI()}`,
  });

export const avatar = (id) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${getRandomAPI()}`,
  });
