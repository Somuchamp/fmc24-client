import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans'],
      },
      height: {
        '426': '426px',
      },
      boxShadow: {
        'custom-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'custom-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'custom-xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
      
    },
  },
  plugins: [],
}
export default config
