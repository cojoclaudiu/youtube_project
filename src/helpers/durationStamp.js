const durationStamp = (duration) => {
  const unChnaged = duration;
  const durationArray = duration.match(/\d+/g).map(Number);

  if (durationArray.length === 1 && unChnaged.includes('M')) {
    const [min] = durationArray;
    return `${min}:00`;
  }

  if (durationArray.length === 1 && unChnaged.includes('H')) {
    const [hour] = durationArray;
    return `${hour}:00:00`;
  }

  if (durationArray.length === 1 && unChnaged.includes('S')) {
    const [sec] = durationArray;
    if (sec <= 9) {
      return `0:0${sec}`;
    }
    return `0:${sec}`;
  }

  if (durationArray.length === 2) {
    const [min, sec] = durationArray;
    if (sec <= 9) {
      return `${min}:0${sec}`;
    }
    return `${min}:${sec}`;
  }

  if (durationArray.length === 3) {
    const [hour, min, sec] = durationArray;
    if (min <= 9 && sec <= 9) {
      return `${hour}:0${min}:0${sec}`;
    }
    if (min <= 9 && sec >= 9) {
      return `${hour}:0${min}:${sec}`;
    }
    if (min >= 9 && sec <= 9) {
      return `${hour}:${min}:0${sec}`;
    }
    return `${hour}:${min}:${sec}`;
  }
  return `n/a`;
};

export default durationStamp;
