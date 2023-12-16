# Tailwind Color Palette Generator Plugin

This plugin generate color variables with variants, from the scheme.

## Usage

Your tailwind.config.js should be like: 

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            scheme: {
                light: {
                    primary: '#96ceb4',
                    secondary: '#ffeead',
                    tertiary: '#ff6f69',
                    foreground: {
                        primary: '#FFFFFF',
                        secondary: '#FFFFFF',
                        tertiary: '#FFFFFF',
                    }
                },
                dark: {
                    primary: '#ffdc74',
                    secondary: '#fbac87',
                    tertiary: '#ff8c87',
                    foreground: {
                        primary: '#FFFFFF',
                        secondary: '#FFFFFF',
                        tertiary: '#FFFFFF',
                    }
                }
            }
        },
    },
    plugins: [
		require('tailwind-color-palette')
	],
}
```

and this plugin convert it to like these: 

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: `hsl(var(--primary) / <alpha-value>)`,
                    50: `hsl(var(--primary-50) / <alpha-value>)`,
                    100: `hsl(var(--primary-100) / <alpha-value>)`,
                    200: `hsl(var(--primary-200) / <alpha-value>)`,
                    300: `hsl(var(--primary-300) / <alpha-value>)`,
                    400: `hsl(var(--primary-400) / <alpha-value>)`,
                    500: `hsl(var(--primary-500) / <alpha-value>)`,
                    600: `hsl(var(--primary-600) / <alpha-value>)`,
                    ...
                },
                secondary: {
                    ...
                }
            }
        },
    },
    plugins: [],
}
```