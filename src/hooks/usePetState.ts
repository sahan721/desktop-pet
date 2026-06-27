import { useEffect, useState } from "react";
import type { PetStats } from "../types/PetStats";


export const usePetState = () => {
  const [state, setState] = useState<PetState>("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();

      if (random < 0.2) {
        setState("sleeping");

        setTimeout(() => {
          setState("idle");
        }, 5000);
      } else {
        setState("walking");

        setTimeout(() => {
          setState("idle");
        }, 2000);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return {
    state,
    setState,
  };
};

export const usePetStats = () => {
  const [stats, setStats] = useState<PetStats>({
    hunger: 100,
    energy: 100,
    happiness: 100,
    xp: 0,
  });

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

  return stats;
};