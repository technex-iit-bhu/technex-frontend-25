const { cubicBezier } = require("framer-motion");
const { clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");

const blockFloat = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: cubicBezier(0.45, 0, 0.55, 1),
    },
  },
};

const pixelFade = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = {
  blockFloat,
  pixelFade,
  cn,
};
