import { skipToken } from '@reduxjs/toolkit/query';
import { useGetVideoDetailsQuery } from 'api/endpoints/video.api';
import { ComponentProps } from 'react';
import { VideoItemSchema } from 'schema/videoItem.schema';

type ViewsCountProps =
  | ({ videoId: string; video?: never } & ComponentProps<'span'>)
  | ({ video: VideoItemSchema; videoId?: never } & ComponentProps<'span'>);

function ViewsCount({ videoId, video, ...props }: ViewsCountProps) {
  const { data } = useGetVideoDetailsQuery(videoId ? { videoId } : skipToken);

  const views = video ? video.statistics.viewCount : data?.items[0]?.statistics.viewCount;

  return <span {...props}>{views} views</span>;
}

export { ViewsCount };
