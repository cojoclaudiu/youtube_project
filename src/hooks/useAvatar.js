import { useEffect, useState } from 'react';
import { avatar } from 'api/youtube';

const useAvatar = (videos) => {
  const [urlAvatars, setUrlAvatars] = useState([]);

  useEffect(() => {
    async function channelId() {
      const arr = videos.map(async (video) => {
        const chId = video.snippet.channelId;
        const response = await avatar(chId).get();
        return response.data.items[0].snippet.thumbnails.default.url;
      });
      const resolved = await Promise.all(arr);
      setUrlAvatars(...[resolved]);
    }

    channelId();
  }, [videos]);

  return urlAvatars;
};

export default useAvatar;
