'use client';

import styles from './IndexImpactChart.module.scss';

import dynamic from 'next/dynamic';
import { Box, Paper, Text, Group, Stack } from '@mantine/core';

import { getIndexImpactOptions } from './IndexImpactChart.options';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <Box className={styles.loadingBox}>Đang tải...</Box>,
});

const IndexImpactChart = () => {
  const dataUp = {
    labels: ['VCB', 'BID', 'HPG', 'GAS', 'CTG', 'TCB'],
    values: [1.25, 0.98, 0.75, 0.42, 0.35, 0.28],
  };

  const dataDown = {
    labels: ['VIC', 'VHM', 'MSN', 'VRE', 'SAB', 'NVL'],
    values: [1.15, 0.85, 0.62, 0.45, 0.32, 0.25],
  };

  const totalUp = dataUp.values.reduce((a, b) => a + b, 0);
  const totalDown = dataDown.values.reduce((a, b) => a + b, 0);

  return (
    <Paper className={styles.marketBreadthChart}>
      <div className={styles.chartContainer}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {/* NHÓM TĂNG */}
          <Stack gap="xs">
            <Chart
              options={{
                ...getIndexImpactOptions('up'),
                xaxis: { categories: dataUp.labels },
              }}
              series={[{ name: 'Đóng góp tăng', data: dataUp.values }]}
              type="bar"
              height={200}
            />
            <Box mt="md">
              <Group justify="space-between" mb={4}>
                <Text size="xs" fw={700} c="green.7">
                  Tổng tăng
                </Text>
                <Text size="xs" fw={700} c="green.7">
                  +{totalUp.toFixed(2)}
                </Text>
              </Group>
              <Chart
                options={getIndexImpactOptions('up')}
                series={[{ data: [totalUp] }]}
                type="bar"
                height={12}
              />
            </Box>
          </Stack>

          {/* NHÓM GIẢM */}
          <Stack gap="xs">
            <Chart
              options={{
                ...getIndexImpactOptions('down'),
                xaxis: { categories: dataDown.labels },
              }}
              series={[{ name: 'Đóng góp giảm', data: dataDown.values }]}
              type="bar"
              height={200}
            />
            <Box mt="md">
              <Group justify="space-between" mb={4}>
                <Text size="xs" fw={700} c="red.7">
                  Tổng giảm
                </Text>
                <Text size="xs" fw={700} c="red.7">
                  -{totalDown.toFixed(2)}
                </Text>
              </Group>
              <Chart
                options={getIndexImpactOptions('down')}
                series={[{ data: [totalDown] }]}
                type="bar"
                height={12}
              />
            </Box>
          </Stack>
        </div>
      </div>
    </Paper>
  );
};

export default IndexImpactChart;
