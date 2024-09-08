const viewsFormat = (input) => new Intl.NumberFormat().format(input);

const statsFormat = (input) => new Intl.NumberFormat('en', { notation: 'compact' }).format(input);

export { statsFormat, viewsFormat };
