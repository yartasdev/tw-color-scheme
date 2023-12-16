const { colors, shades } = require('./constant');

const theme = () => {
  return {
    theme: {
      extend: {
        colors: {
          ...getThemeColors()
        }
      }
    }
  }
}

const getThemeColors = () => {
  const root = {};
  for(const name of colors) {
    root[name] = {
      DEFAULT: `hsl(var(--${name}) / <alpha-value>)`,
      foreground: `hsl(var(--${name}-foreground) / <alpha-value>)`
    };
    for(const shade of shades) {
      root[name][shade] = `hsl(var(--${name}-${shade}) / <alpha-value>)`;
    }
  }
  return root;
}

module.exports = theme;