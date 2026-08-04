/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#0a0a0f',
          base: '#050506',
          accent: '#5E6AD2',
          'accent-glow': 'rgba(94, 106, 210, 0.2)',
          foreground: '#EDEDEF',
          muted: '#8A8F98',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.12)',
          strong: 'rgba(255, 255, 255, 0.15)',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 16px 64px rgba(0, 0, 0, 0.4)',
        glow: '0 0 40px rgba(94, 106, 210, 0.3)',
      },
    },
  },
  plugins: [],
}
