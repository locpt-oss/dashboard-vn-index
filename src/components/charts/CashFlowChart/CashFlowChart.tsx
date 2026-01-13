'use client';

import styles from './CashFlowChart.module.scss';

import dynamic from 'next/dynamic';
import { Box, Paper } from '@mantine/core';

import { getCashFlowOptions } from './CashFlowChart.options';

// Load dynamic để chạy được trong Next.js App Router
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <Box className={styles.loadingBox}>Đang tải...</Box>,
});

const CashFlowChart = () => {
  const series = [
    {
      name: 'Giá trị (tỷ)',
      data: [1520, 850, 200],
    },
  ];

  return (
    <Paper withBorder className={styles.cashFlowChart}>
      <div className={styles.chartContainer}>
        <Chart
          options={getCashFlowOptions()}
          series={series}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>
    </Paper>
  );
};

export default CashFlowChart;
