import { useGetAvatarQuery } from 'api/endpoints/avatar.api';
import { ComponentProps } from 'react';
import { VideoItemSchema } from 'schema/videos.schema';

interface ChannelAvatarProps extends Omit<ComponentProps<'img'>, 'src' | 'alt'> {
  video: VideoItemSchema;
}

function ChannelAvatar({ video, ...props }: ChannelAvatarProps) {
  const { data } = useGetAvatarQuery({ id: video.snippet.channelId });
  const avatarUrl = data?.items[0].snippet.thumbnails.default.url ?? '';

  return <img src={avatarUrl} alt={video.snippet.title} {...props} />;
}

export { ChannelAvatar };
