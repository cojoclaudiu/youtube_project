import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

type ItemSchema = [string, number, number[]];

const prediction = async (term: string) => {
  const GOOGLE_AC_URL = `https://clients1.google.com/complete/search`;
  return axios({
    url: GOOGLE_AC_URL,
    adapter: jsonpAdapter,
    params: {
      client: 'youtube',
      hl: 'en',
      ds: 'yt',
      q: term,
    },
  }).then((res) => {
    if (res.status !== 200) {
      throw Error('Suggest API not 200!');
    }
    return res.data[1].map((item: ItemSchema) => {
      return item[0];
    });
  });
};

export { prediction };
