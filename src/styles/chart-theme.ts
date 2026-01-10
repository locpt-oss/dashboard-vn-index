// src/styles/chart-tokens.ts
export const CHART_THEME = {
  colors: {
    ceiling: '#ce78ff',
    up: '#20c997',
    ref: '#ffd43b',
    down: '#ff6b6b',
    floor: '#339af0',
    // Thêm màu chữ cho 2 chế độ
    text: {
      default: '#1a1b1e', // text-default-default
      secondary: '#868e96', // text-default-secondary
      tertiary: '#adb5bd', // text-default-tertiary
    },
  },
  typography: {
    // Lấy đúng font mày định nghĩa trong layout
    fontFamily: 'var(--font-roboto), sans-serif',
    // --- BODY ---
    bodyLarge: {
      fontSize: '16px',
      weightRegular: 400,
      weightMedium: 500, // emphasized
      lineHeight: 1.5,
    },
    bodyMedium: {
      fontSize: '14px',
      weightRegular: 400,
      weightMedium: 500, // emphasized
      lineHeight: 1.5,
    },
    bodySmall: {
      fontSize: '12px',
      weightRegular: 400,
      weightMedium: 500, // emphasized
      lineHeight: 1.5,
    },

    // --- LABEL ---
    labelLarge: {
      fontSize: '14px',
      weightMedium: 500,
      weightSemibold: 600, // emphasized
      lineHeight: 1.4,
    },
    labelMedium: {
      fontSize: '12px',
      weightMedium: 500,
      weightSemibold: 600, // emphasized
      lineHeight: 1.4,
    },
    labelSmall: {
      fontSize: '11px',
      weightMedium: 500,
      weightSemibold: 600, // emphasized
      lineHeight: 1.4,
    },

    // --- TITLE ---
    titleLarge: {
      fontSize: '22px',
      weightRegular: 400,
      weightMedium: 500, // emphasized
      lineHeight: 1.4,
    },
    titleMedium: {
      fontSize: '16px',
      weightRegular: 400,
      weightMedium: 500, // emphasized
      lineHeight: 1.4,
    },
    titleSmall: {
      fontSize: '14px',
      weightRegular: 400,
      weightMedium: 500, // emphasized
      lineHeight: 1.4,
    },
  },
} as const;
