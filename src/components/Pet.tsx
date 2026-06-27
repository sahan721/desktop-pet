import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  idleAnimation,
  walkingAnimation,
  sleepingAnimation,
} from "../animations/petAnimations";

import SpeechBubble from "./SpeechBubble";

import { usePetMovement } from "../hooks/usePetMovement";
import { usePetState } from "../hooks/usePetState";
import { usePetStats } from "../hooks/usePetStats";

import { PET_MESSAGES } from "../constants/messages";
import StatusBar from "./StatusBar";

import { calculateLevel } from "../utils/level";
import { useAchievements } from "../hooks/useAchievements";

import AchievementPopup from "./AchievementPopup";
import { useGitActivity } from "../hooks/useGitActivity";

const Pet = () => {
  const { state } = usePetState();
  const position = usePetMovement(state);
  const stats = usePetStats();
  const level = calculateLevel(stats.xp);
  const achievements = useAchievements(level);
  const [showAchievement, setShowAchievement] =
  useState(false);
  const commitCount = useGitActivity();

  const currentAnimation =
    state === "walking"
      ? walkingAnimation
      : state === "sleeping"
      ? sleepingAnimation
      : idleAnimation;

  const [message, setMessage] = useState(PET_MESSAGES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * PET_MESSAGES.length
      );

      setMessage(PET_MESSAGES[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const unlocked = achievements.some(
    (a) => a.unlocked
  );

  if (unlocked) {
    setShowAchievement(true);

    const timeout = setTimeout(() => {
      setShowAchievement(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }
}, [achievements]);

  return (
    <motion.div
      className="absolute text-8xl select-none"
      animate={{
        ...currentAnimation.animate,
        x: position.x,
        y: position.y,
      }}
      transition={{
        ...currentAnimation.transition,
        x: { duration: 2 },
        y: { duration: 2 },
      }}
    >
      {/* Pet State */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white">
        {state}
      </div>

      {/* Pet Stats */}
      <StatusBar stats={stats} />

      <div className="absolute top-12 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white whitespace-nowrap">
        Git Commits: {commitCount}
      </div>

      {/* Speech Bubble */}
      <SpeechBubble message={message} />

      {/* Pet */}
      {state === "sleeping" ? "😴" : "🐱"}

      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-xs text-yellow-300 whitespace-nowrap">
        {achievements
          .filter((a) => a.unlocked)
          .map((a) => `🏆 ${a.title}`)}
      </div>

      {showAchievement && (
        <AchievementPopup title="First Steps" />
      )}
    </motion.div>
  );
};

export default Pet;