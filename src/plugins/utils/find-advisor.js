export const calculateStar = (number) => {
  return Number(number.toString().split(".")[0]);
};

export const emptyStar = (number) => {
  return Number(number.toString().split(".")[1]) / 10;
};
export const restStar = (number) => {
  return 5 - Number(number.toString().split(".")[0]);
};
