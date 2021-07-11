import axios from 'axios';

const getRandomAPI = () => {
  // const APIS = [
  //   'AIzaSyDY7VaHYyVmc7cKXmd1eG9uOISJJs8ZGFo',
  //   'AIzaSyCqR5kG9K7s9HhdkjU-u1j6nCj1bAHfkkI',
  //   'AIzaSyCbLm17Dk_PUCovuP_eKmvqwCg5MK9eDBU',
  //   'AIzaSyB1KIpMuXNBbjklZ0vuky5CtSE_swxOCMU',
  //   'AIzaSyB6tyU31FjquwW659yGBueJV5-KmpVsJbU',
  //   'AIzaSyBz1Fm5TbhdfqMrEhqzX3CLQRBqbDhyC5w',
  //   'AIzaSyDY9qLCEHMG56msQPbWPvsXmuC4X3IAZ_Q',
  //   'AIzaSyDCZPDhpH3RRXHn-c-aMvr8UbGvNgKMJHM',
  //   'AIzaSyA1rhiHXh_j2GevS3Js-47Dl3jpMRUlQDE',
  //   'AIzaSyCaLmNJE7OLlzSt-AJHA1bWlrGp_HSS93Y',
  //   'AIzaSyCEXP9DEe7Xq-zPLdlNY64tT7vqIRwdAZA',
  //   'AIzaSyDFFfPED1fmWlKQ_UA96IoRlZW66UCML40',
  //   'AIzaSyDsvNcY0x2N6gIbNON-sZUEqHu_7Hr9Q-o',
  //   'AIzaSyC6aiB7fNm6d6RhkYCkY7ZSoAQQlIaBa1Y',
  //   'AIzaSyBw2ubQebXuiC7bzXRP-J2g9ZVjqB05uWs',
  //   'AIzaSyCOggM89-dTxeCUYfv-KWezYld17jdEITA',
  //   'AIzaSyDMbBScdqophxy9B2bfOBDVMkPkSnR82QI',
  // ];

  const APIS2 = [
    'AIzaSyDdkAbOjEYDztZTecp2axGJpZESbTbDqvI',
    'AIzaSyCoxN07jN-ql-UzZ4iNMOS-pSD4pdgbaP4',
    'AIzaSyBzCZnf2oPGfV60d7qDB1M7ieUkQ0htqNQ',
    'AIzaSyCElG8PaM601lHGrC4M4vnvEwLGkGOI_Tk',
    'AIzaSyCSSTDBu4ETz_wcdUXJIoGyQtYAgRIbcl8',
    'AIzaSyCtEgzDTV650l8tV6z7qrXsaoTsACWkGbk',
    'AIzaSyBt6KlmzJRWFwq1zuN2iZLpRxcIhyykJB4',
    'AIzaSyA5usOhzLyxu9ERA7tkdG_mWH1NVo-jgqU',
    'AIzaSyCUSFIq19agHlBXydVb8ZqGNQTX6opc3v4',
    'AIzaSyBB7TFc0IXb7D6gohNSiFNzlrPg_IfJp-A',
    'AIzaSyAoJWUEdc-wxWpmDctasr2XknnfotYnPXM',
    'AIzaSyD6vtAcSbBzB_9LQOV2rj6MJlQZ9XfyHl0',
  ];

  return APIS2[Math.floor(Math.random(APIS2.length) * 10)];
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

export const avatar = (id) =>
  axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${getRandomAPI()}`,
  });
