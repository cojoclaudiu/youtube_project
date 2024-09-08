import styles from './DurationVideo.module.css';

function DurationVideo({ duration }) {
  return <div className={styles.timeStamp}>{duration}</div>;
}

export { DurationVideo };
