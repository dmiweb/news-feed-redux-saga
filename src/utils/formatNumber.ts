export const formatNumber = (number: number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'К'; 
  }

  return number;
}