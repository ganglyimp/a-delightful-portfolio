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

export const fakeCarousel = {
  change: (direction) => ({
    x: direction > 0 ? [0, -window.innerWidth, window.innerWidth, 0] : [0, window.innerWidth, -window.innerWidth, 0],
    opacity: [null, 0, 0, 1],
  })
};

export const artLoadIn = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

export const sectionSlide = {
  initial: (direction) => ({
    x: direction > 0 ? -window.innerWidth : window.innerWidth,
    opacity: 0
  }),
  in: {
    x: 0,
    opacity: 1
  },
  out: (direction) => ({
    x: direction > 0 ? window.innerWidth : -window.innerWidth,
    opacity: 0
  })
}
