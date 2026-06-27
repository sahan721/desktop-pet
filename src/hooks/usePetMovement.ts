import { useEffect, useState } from "react";
import type { PetState } from "../types/PetState";

export const usePetMovement = (state: PetState) => {
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (state === "sleeping") return;

      setPosition({
        x: Math.random() * 200,
        y: Math.random() * 200,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [state]);

  return position;
};