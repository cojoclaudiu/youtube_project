import { useState } from 'react';

type StatusState = 'like' | 'dislike' | undefined;

const useToggleLikeDislike = () => {
  const [status, setStatus] = useState<StatusState>(undefined);

  const handleLike = () => {
    if (status === 'like') {
      setStatus(undefined);
    } else {
      setStatus('like');
    }
  };

  const handleDislike = () => {
    if (status === 'dislike') {
      setStatus(undefined);
    } else {
      setStatus('dislike');
    }
  };

  return {
    handleLike,
    handleDislike,
    status,
  };
};

export { useToggleLikeDislike };
