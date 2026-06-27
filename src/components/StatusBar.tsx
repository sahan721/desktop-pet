import type { PetStats } from "../types/PetStats";
import { calculateLevel } from "../utils/level";

interface StatusBarProps {
  stats: PetStats;
}

const StatusBar = ({ stats }: StatusBarProps) => {
  const level = calculateLevel(stats.xp);

  return (
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 rounded bg-white px-2 py-1 text-[10px] text-black whitespace-nowrap">
      🍖 {stats.hunger}
      {" | "}
      ⚡ {stats.energy}
      {" | "}
      😊 {stats.happiness}
      {" | "}
      ⭐ {stats.xp}
      {" | "}
      🏆 Lv {level}
    </div>
  );
};

export default StatusBar;