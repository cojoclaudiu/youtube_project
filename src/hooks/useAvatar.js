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
        const promises = videos?.map((video) => {
          const chId = video.snippet.channelId;
          return avatarAPI(chId)
            .get('', { cancelToken: source.token })
            .then((res) =>
              res.status === 200 ? res.data.items[0].snippet?.thumbnails?.default?.url ?? '' : '',
            );
        });
        const resolved = (await Promise.all(promises)).filter((x) => x !== '');
        setAvatarURL(resolved);
      } catch (err) {
        setErrorAvatar(err);
        setAvatarURL(null);
      } finally {
        setLoadingAvatar(false);
      }
    };

    fetchAvatars();

    return () => {
      source.cancel('useAvatar got unmounted');
    };
  }, [avatarAPI, videos]);
  return {
    avatarURL,
    errorAvatar,
    loadingAvatar,
  };
};

export default useAvatar;
