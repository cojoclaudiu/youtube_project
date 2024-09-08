import { durationStamp } from 'helpers/durationStamp';
import styles from './DurationVideo.module.css';
import { VideoItemSchema } from 'schema/videos.schema';

interface DurationVideoProps {
  video: VideoItemSchema;
}

function DurationVideo({ video }: DurationVideoProps) {
  const duration = video.contentDetails.duration;

  return <div className={styles.timeStamp}>{durationStamp(duration)}</div>;
}

export { DurationVideo };
