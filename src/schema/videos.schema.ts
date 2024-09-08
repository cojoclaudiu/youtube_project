import { PageInfoSchema } from './pageInfo.schema';
import { VideoItemSchema } from './videoItem.schema';

export interface VideosSchema {
  kind: string;
  etag: string;
  items: VideoItemSchema[];
  nextPageToken: string;
  pageInfo: PageInfoSchema;
}
