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

export const sectionSlide = {
  initial: (direction) => {
    return {
      x: direction > 0 ? -window.innerWidth : window.innerWidth,
      opacity: 0
    };
  },
  in: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  out: (direction) => {
    return {
      x: direction > 0 ? window.innerWidth : -window.innerWidth,
      opacity: 0
    };
  }
};

export const videoExpand = {
  initial: {

  },
  in: {

  },
  out: {
    
  }
};