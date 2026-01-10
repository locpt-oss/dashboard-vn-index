'use client';

import styles from './StockStatusChart.module.scss';

import dynamic from 'next/dynamic';
import { Paper, Box } from '@mantine/core';
import { getStockStatusOptions } from './StockStatusChart.options';

// Load dynamic để chạy được trong Next.js App Router
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <Box className={styles.loadingBox}>Đang tải...</Box>,
});

const StockStatusChart = () => {
  // 1. Dữ liệu: 5 con số tương ứng 5 loại
  const series = [25, 180, 50, 110, 15];

  return (
    <Paper withBorder className={styles.stockStatusChart}>
      <div className={styles.chartContainer}>
        <Chart
          options={getStockStatusOptions()}
          series={series}
          type="donut"
          width="100%"
          height="100%"
        />
      </div>
    </Paper>
  );
};

export default StockStatusChart;
