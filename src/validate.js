const {z} = require('zod');

const validate = (scheme) => {

  const schema = z.object({
    light: z.object({
      primary: z.string(),
      secondary: z.string(),
      tertiary: z.string(),
      foreground: z.object({
        primary: z.string(),
        secondary: z.string(),
        tertiary: z.string(),
      })
    }),
    dark: z.object({
      primary: z.string(),
      secondary: z.string(),
      tertiary: z.string(),
      foreground: z.object({
        primary: z.string(),
        secondary: z.string(),
        tertiary: z.string(), 
      })
    })
  })

  const validation = schema.safeParse(scheme);

  if(!validation.success) {
    const path = validation.error.issues[0]['path'];
    throw new Error(`Please enter a valid color scheme, error: ${path.join('->')}`);
  }

  return scheme;

}

module.exports = validate;