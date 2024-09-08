const getRandomAPI = () => {
  const APIsUSTD = [
    import.meta.env.VITE_API_KEY_1,
    import.meta.env.VITE_API_KEY_2,
    import.meta.env.VITE_API_KEY_3,
    import.meta.env.VITE_API_KEY_4,
    import.meta.env.VITE_API_KEY_5,
  ].filter((key) => key);

  const randomKey = APIsUSTD[Math.floor(Math.random() * APIsUSTD.length)];

  return import.meta.env.VITE_API_KEY_2;
};

export { getRandomAPI };
