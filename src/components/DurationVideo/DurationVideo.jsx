import React from 'react';
import durationStamp from 'helpers/durationStamp';
import styles from './DurationVideo.module.css';

export default function DurationVideo({ duration }) {
  return <div className={styles.timeStamp}>{durationStamp(duration)}</div>;
}
