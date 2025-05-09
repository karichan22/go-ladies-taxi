/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FCD7E7',
          DEFAULT: '#E13FA4',
          dark: '#B82D80',
        },
        secondary: {
          light: '#F5F5F5',
          DEFAULT: '#E0E0E0',
          dark: '#BDBDBD',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        background: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.05)',
        elevated: '0 8px 16px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        card: '16px',
        button: '12px',
        input: '8px',
      },
    },
  },
  plugins: [],
};