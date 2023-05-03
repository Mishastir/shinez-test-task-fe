export const roundWithSymbol = (value: number, symbol: string) => {
  const rounded = Math.floor(value * 100) / 100;
  return (`${rounded}${symbol}`);
};
