const durationStamp = (duration) => {
  const durationArray = duration.match(/\d+/g).map(Number);

  if (durationArray.length === 1) {
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
