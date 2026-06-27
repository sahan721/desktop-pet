import { useEffect, useState } from "react";
import type { Achievement } from "../types/Achievement";

export const useAchievements = (level: number) => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "first-steps",
      title: "First Steps",
      description: "Reach Level 2",
      unlocked: false,
    },
  ]);

  useEffect(() => {
    if (level >= 2) {
      setAchievements((prev) =>
        prev.map((achievement) =>
          achievement.id === "first-steps"
            ? { ...achievement, unlocked: true }
            : achievement
        )
      );
    }
  }, [level]);

  return achievements;
};