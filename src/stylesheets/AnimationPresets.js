export const slideVertical = {
  initial: {
    opacity: 0,
    y: -window.innerHeight
  },
  in: {
    opacity: 1,
    y: 0,
    transition: "0.3s"
  },
  out: {
    opacity: 0,
    y: window.innerHeight
  }
};

export const slideHorizontal = {
  change: (direction) => ({
    x: direction > 0 ? [0, -window.innerWidth, window.innerWidth, 0] : [0, window.innerWidth, -window.innerWidth, 0],
    opacity: [null, 0, 0, 1],
  })
}
