const varColorFactory = (cssVar) => ({ opacityVariable, opacityValue, ...params }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${cssVar}), ${opacityValue})`
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`
  }
  return `rgb(var(${cssVar}))`
};

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: varColorFactory('--primary'),
          contrast: varColorFactory('--primary-contrast'),
        },
      },
    },
  },
};
