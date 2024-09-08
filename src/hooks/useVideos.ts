// const handleSelect = (e) => {
//   e.preventDefault();
//   if (e.target.value === 'default') {
//     setStore([...videos]);
//     setToggle(!toggle);
//   }
//   if (e.target.value === 'most') {
//     setStore([...videos].sort((a, b) => b.statistics.viewCount - a.statistics.viewCount));
//     setToggle(!toggle);
//   }
//   if (e.target.value === 'least') {
//     setStore([...videos].sort((a, b) => a.statistics.viewCount - b.statistics.viewCount));
//     setToggle(!toggle);
//   }
// };

import { useGetVideosQuery } from 'api/endpoints/videos.api';

const useVideos = () => {
  const { data } = useGetVideosQuery();

  return {
    videos: data?.items,
  };
};

export { useVideos };
