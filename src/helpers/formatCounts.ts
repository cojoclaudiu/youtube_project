const viewsFormat = (input: number) => new Intl.NumberFormat().format(input);

const statsFormat = (input: number) =>
  new Intl.NumberFormat('en', { notation: 'compact' }).format(input);

export { statsFormat, viewsFormat };
