import { useSearchParams } from 'react-router-dom';

const useVideoId = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  return { videoId };
};

export { useVideoId };
