import { PageInfoSchema } from './pageInfo.schema';
import { VideoItemSchema } from './videoItem.schema';

export interface SearchFeedSchema {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  items: VideoItemSchema[];
  pageInfo: PageInfoSchema;
}
