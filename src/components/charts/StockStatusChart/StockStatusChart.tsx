'use client';

import styles from './StockStatusChart.module.scss';

import dynamic from 'next/dynamic';
import { Paper, useMantineColorScheme, Box } from '@mantine/core';
import { ApexOptions } from 'apexcharts';

// Load dynamic để chạy được trong Next.js App Router
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => (
    <Box
      h={350}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Đang tải...
    </Box>
  ),
});

const StockStatusChart = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  // 1. Dữ liệu: 5 con số tương ứng 5 loại
  const series = [25, 180, 50, 110, 15];

  // 2. Cấu hình: Chỉ những thứ bắt buộc phải có
  const options: ApexOptions = {
    labels: ['Trần', 'Tăng', 'Không đổi', 'Giảm', 'Sàn'],
    colors: ['#ce78ff', '#20c997', '#ffd43b', '#ff6b6b', '#339af0'],
    chart: {
      type: 'donut',
    },
    legend: {
      position: 'bottom',
    },
  };

  return (
    <Paper withBorder p="md" radius="md" className={styles.stockStatusChart}>
      <Chart options={options} series={series} type="donut" width="100%" />
    </Paper>
  );
};

export default StockStatusChart;
