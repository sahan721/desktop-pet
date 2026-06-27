import { useEffect, useState } from "react";
import type { PetStats } from "../types/PetStats";
import {saveStats,loadStats,} from "../services/StorageService";



export const usePetStats = () => {
  const [stats, setStats] = useState<PetStats>(
  () =>
    loadStats() || {
      hunger: 100,
      energy: 100,
      happiness: 100,
      xp: 0,
    }
);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        hunger: Math.max(prev.hunger - 1, 0),
        energy: Math.max(prev.energy - 1, 0),
        happiness: Math.max(prev.happiness - 1, 0),
        xp: prev.xp + 1,
      }));
    }, 5000);

    

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  saveStats(stats);
}, [stats]);

  return {
  stats,
  setStats,
};
};