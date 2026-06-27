import type { PetStats } from "../types/PetStats";

const STORAGE_KEY = "developer-desktop-pet";

export const saveStats = (stats: PetStats) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(stats)
  );
};

export const loadStats = (): PetStats | null => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return null;

  return JSON.parse(saved);
};