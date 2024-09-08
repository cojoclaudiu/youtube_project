import styles from './DurationVideo.module.css';

export default function DurationVideo({ duration }) {
  return <div className={styles.timeStamp}>{duration}</div>;
}
