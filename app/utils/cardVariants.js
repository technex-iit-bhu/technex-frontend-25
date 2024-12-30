export const cardVariants = {
    offscreen: {
        x: -100,
        rotate: -3,
    },
    onscreen: {
        x: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
  }