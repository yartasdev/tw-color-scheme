const { colors, shades } = require("./constant");
const { toHSL } = require("./util");

const getDarkColorVariables = (scheme) => {
  const root = {};
  for (const name of colors) {
    if(name !== 'reverse') {
      const color = scheme[name];
      if(!color) throw new Error(`${name} not found in your Light color scheme!`);
      const { h, s, l } = toHSL(color);
      const { h: fh, s: fs, l: fl } = toHSL(scheme["foreground"][name]);
      root[`--${name}`] = `${h} ${s}% ${l}%`;
      root[`--${name}-foreground`] = `${fh} ${fs}% ${fl}%`;
      for (const shade of shades) {
        const { h, s } = toHSL(color);
        root[`--${name}-${shade}`] = `${h} ${s}% ${Number(shade) / 10}%`;
      }
    }else {
      const color = '#FFFFFF';
      const { h, s, l } = toHSL(color);
      const { h: fh, s: fs, l: fl } = toHSL('#000000');
      root[`--${name}`] = `${h} ${s}% ${l}%`;
      root[`--${name}-foreground`] = `${fh} ${fs}% ${fl}%`;
      for (const shade of shades) {
        const { h, s } = toHSL(color);
        root[`--${name}-${shade}`] = `${h} ${s}% ${Number(shade) / 10}%`;
      }
    }
  }
  return root;
};

const getLightColorVariables = (scheme) => {
  const root = {};
  for (const name of colors) {
    if(name !== 'reverse') {
      const color = scheme[name];
      if(!color) throw new Error(`${name} not found in your Light color scheme!`);
      const { h, s, l } = toHSL(color);
      const { h: fh, s: fs, l: fl } = toHSL(scheme["foreground"][name]);
      root[`--${name}`] = `${h} ${s}% ${l}%`;
      root[`--${name}-foreground`] = `${fh} ${fs}% ${fl}%`;
      for (const shade of shades) {
        const { h, s } = toHSL(color);
        root[`--${name}-${shade}`] = `${h} ${s}% ${100 - Number(shade) / 10}%`;
      }
    }else {
      const color = '#000000';
      const { h, s, l } = toHSL(color);
      const { h: fh, s: fs, l: fl } = toHSL('#FFFFFF');
      root[`--${name}`] = `${h} ${s}% ${l}%`;
      root[`--${name}-foreground`] = `${fh} ${fs}% ${fl}%`;
      for (const shade of shades) {
        const { h, s } = toHSL(color);
        root[`--${name}-${shade}`] = `${h} ${s}% ${100 - Number(shade) / 10}%`;
      }
    }
  }
  return root;
};

module.exports = {
  getLightColorVariables,
  getDarkColorVariables,
};
