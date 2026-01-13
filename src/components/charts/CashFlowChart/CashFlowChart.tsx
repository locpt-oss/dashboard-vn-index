'use client';

import styles from './CashFlowChart.module.scss';

import Chart from 'react-apexcharts';
import { Paper } from '@mantine/core';
import { getCashFlowOptions } from './CashFlowChart.options';

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
          height={300}
        />
      </div>
    </Paper>
  );
};

export default CashFlowChart;
