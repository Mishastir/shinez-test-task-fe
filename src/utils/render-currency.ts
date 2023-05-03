export const renderCurrency = (value: number) => {
  const rounded = Math.floor(value * 100) / 100;
  return (`${rounded}$`);
};
