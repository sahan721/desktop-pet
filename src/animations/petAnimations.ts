export const idleAnimation = {
  animate: {
    y: [0, -10, 0],
    scale: [1, 1.05, 1],
  },

  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const walkingAnimation = {
  animate: {
    x: [0, 5, -5, 0],
    rotate: [0, 5, -5, 0],
  },

  transition: {
    duration: 0.5,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

export const sleepingAnimation = {
  animate: {
    scale: [1, 0.95, 1],
    opacity: [1, 0.8, 1],
  },

  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};