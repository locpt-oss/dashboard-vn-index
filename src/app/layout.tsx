// Import Styles
import '@mantine/core/styles.css';
import '@/styles/globals.scss';
import styles from '@/app/layout.module.scss';

// Import Libraries
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';

// 1. Cấu hình Font Inter
const roboto = Roboto({
  subsets: ['latin', 'vietnamese'], // Bắt buộc có vietnamese để đọc tiếng Việt không lỗi
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-roboto', // Tạo biến CSS để SCSS có thể dùng được
});

// 2. Cấu hình Mantine Theme
const theme = createTheme({
  fontFamily: roboto.style.fontFamily, // Áp dụng font Inter cho toàn bộ Mantine
});

export const metadata: Metadata = {
  title: 'VnInsight - Dashboard Tài Chính',
  description: 'Phân tích dữ liệu tài chính chuyên sâu',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={roboto.variable} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <main className={styles.mainContent}>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
