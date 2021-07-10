import axios from 'axios';

const getRandomAPI = () => {
  const APIS = [
    'AIzaSyDY7VaHYyVmc7cKXmd1eG9uOISJJs8ZGFo',
    'AIzaSyCqR5kG9K7s9HhdkjU-u1j6nCj1bAHfkkI',
    'AIzaSyCbLm17Dk_PUCovuP_eKmvqwCg5MK9eDBU',
    'AIzaSyB1KIpMuXNBbjklZ0vuky5CtSE_swxOCMU',
    'AIzaSyB6tyU31FjquwW659yGBueJV5-KmpVsJbU',
    'AIzaSyBz1Fm5TbhdfqMrEhqzX3CLQRBqbDhyC5w',
    'AIzaSyDY9qLCEHMG56msQPbWPvsXmuC4X3IAZ_Q',
    'AIzaSyDCZPDhpH3RRXHn-c-aMvr8UbGvNgKMJHM',
    'AIzaSyA1rhiHXh_j2GevS3Js-47Dl3jpMRUlQDE',
    'AIzaSyCaLmNJE7OLlzSt-AJHA1bWlrGp_HSS93Y',
    'AIzaSyCEXP9DEe7Xq-zPLdlNY64tT7vqIRwdAZA',
    'AIzaSyDFFfPED1fmWlKQ_UA96IoRlZW66UCML40',
    'AIzaSyDsvNcY0x2N6gIbNON-sZUEqHu_7Hr9Q-o',
    'AIzaSyC6aiB7fNm6d6RhkYCkY7ZSoAQQlIaBa1Y',
  ];

  return APIS[Math.floor(Math.random(APIS.length) * 10)];
};

// console.log(getRandomAPI());

export const youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${getRandomAPI()}`,
});

export const youtubeVideo = (videoId) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${getRandomAPI()}`,
  });

export const relatedVideos = (videoId) =>
  axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=10&type=video&key=${getRandomAPI()}`,
  });

export const searchVideo = (keyword) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keyword}&key=${getRandomAPI()}`,
  });

export const getVideoDetails = (videoId) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${getRandomAPI()}`,
  });
