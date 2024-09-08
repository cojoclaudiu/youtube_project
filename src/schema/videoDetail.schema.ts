import { VideoItemSchema } from './videoItem.schema';

export interface VideoDetailSchema {
  kind: string;
  etag: string;
  items: VideoItemSchema[];
  pageInfo: PageInfo;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
