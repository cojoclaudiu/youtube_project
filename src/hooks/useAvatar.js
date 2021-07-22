import { useEffect, useState } from 'react';

const useAvatar = (avatarAPI, videos) => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [errorAvatar, setErrorAvatar] = useState(null);
  const [loadingAvatar, setLoadingAvatar] = useState(null);
  const [avatarMounted, setAvatarMounted] = useState(true);

  useEffect(() => {
    const fetchAvatars = async () => {
      if (videos && videos.length > 0) {
        try {
          setLoadingAvatar(true);
          const arr = videos.map(async (video) => {
            const chId = video.snippet.channelId;
            const response = await avatarAPI(chId).get();
            if (response.status === 200) {
              return response.data.items[0].snippet.thumbnails.default.url;
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
    };

    fetchAvatars();
    return () => setAvatarMounted(false);
  }, [avatarAPI, videos]);
  return {
    avatarURL,
    setAvatarURL,
    errorAvatar,
    loadingAvatar,
    avatarMounted,
  };
};

export default useAvatar;
