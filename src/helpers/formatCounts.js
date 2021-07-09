export const viewsFormat = input => new Intl.NumberFormat().format(input);

export const statsFormat = input => new Intl.NumberFormat('en', { notation: 'compact' }).format(input)



