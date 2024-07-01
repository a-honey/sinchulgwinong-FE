export const transformRatingToStar = (rating: number) => {
  return "★".repeat(Math.round(rating));
};

export const transformRoundToTwoDecimalPlaces = (value: number): number => {
  return Math.round(value * 100) / 100;
};
