export const calculateLevel = (xp: number): number => {
  return Math.floor(xp / 10) + 1;
};