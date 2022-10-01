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

export const sectionHorizontal = {
  initial: (direction) => {
    return {
      x: direction > 0 ? -window.innerWidth : window.innerWidth,
      opacity: 0
    };
  },
  in: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  out: (direction) => {
    return {
      x: direction > 0 ? window.innerWidth : -window.innerWidth,
      opacity: 0
    };
  }
};

export const slideUp = {
  initial: {
    y: window.innerHeight,
    opacity: 0
  },
  in: {
    y: 0,
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

export const fadeInOut = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

export const videoExpand = {
  neutral: {
    width: null,
    height: null,
    opacity: 1
  },
  expand: {
    width: '90vw',
    height: '37.305vw',
    opacity: 0
  }
};
//https://www.youtube.com/watch?v=3QrkCmsfewM