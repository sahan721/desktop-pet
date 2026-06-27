import { motion } from "framer-motion";

interface AchievementPopupProps {
  title: string;
}

const AchievementPopup = ({
  title,
}: AchievementPopupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-32 left-1/2 -translate-x-1/2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-black shadow-lg whitespace-nowrap"
    >
      🏆 Achievement Unlocked: {title}
    </motion.div>
  );
};

export default AchievementPopup;