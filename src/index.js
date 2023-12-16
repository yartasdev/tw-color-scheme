const theme = require('./theme');
const validate = require('./validate');
const variable = require('./variable');
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({addBase, config}) {

  const scheme = validate(config('theme.scheme'));

  const dark = variable.getDarkColorVariables(scheme.dark);
  const light = variable.getLightColorVariables(scheme.light);

  addBase({
    ':root': {...light},
    '.dark': {...dark}
  });

}, theme());