import { useEffect, useState } from 'react';
import axios from 'axios';

const useAvatar = (avatarAPI, videos) => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [errorAvatar, setErrorAvatar] = useState(null);
  const [loadingAvatar, setLoadingAvatar] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchAvatars = async () => {
        try {
          setLoadingAvatar(true);
          const arr = videos?.map(async (video) => {
            const chId = video.snippet.channelId;
            const response = await avatarAPI(chId).get('', { cancelToken: source.token });
            if (response.status === 200) {
              return response.data.items[0].snippet?.thumbnails?.default?.url;
            }
            return false;
          });
          const resolved = await Promise.all(arr);
          setAvatarURL(...[resolved]);
        } catch (err) {
          setErrorAvatar(err);
        } finally {
          setLoadingAvatar(false);
        }
      }

    fetchAvatars();
    return () => source.cancel();
  }, [avatarAPI, videos]);
  return {
    avatarURL,
    errorAvatar,
    loadingAvatar,
  };
};

export default useAvatar;
