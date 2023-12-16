const toRGB = (hex) => {
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (hex.length == 4) {
    r = Number('0x' + hex[1] + hex[1]);
    g = Number('0x' + hex[2] + hex[2]);
    b = Number('0x' + hex[3] + hex[3]);

    // 6 digits
  } else if (hex.length == 7) {
    r = Number('0x' + hex[1] + hex[2]);
    g = Number('0x' + hex[3] + hex[4]);
    b = Number('0x' + hex[5] + hex[6]);
  }

  return { r, g, b };
}

const toHSL = (hex) => {
  let { r, g, b } = toRGB(hex);

  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

const toRGB01 = ({h, s, l}) => {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Number((r + m).toFixed(3));
  g = Number((g + m).toFixed(3));
  b = Number((b + m).toFixed(3));

  return { r, g, b };
}

module.exports = {
  toRGB,
  toHSL,
  toRGB01
}