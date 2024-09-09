import { ComponentProps } from 'react';
import { ChannelItemSchema} from 'schema/channel.schema';

interface ChannelAvatarProps extends Omit<ComponentProps<'img'>, 'src' | 'alt'> {
  channel: ChannelItemSchema;
}

function ChannelAvatar({ channel, ...props }: ChannelAvatarProps) {
  const avatarUrl = channel.snippet.thumbnails.default.url ?? '';

  return <img src={avatarUrl} alt={channel.snippet.title} {...props} />;
}

export { ChannelAvatar };
