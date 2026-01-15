import { ApexOptions } from 'apexcharts';
import { CHART_THEME } from '@/styles/chart-theme';

const { colors, typography: typo } = CHART_THEME;

export const getIndexImpactOptions = (type: 'up' | 'down'): ApexOptions => ({
  chart: {
    type: 'bar',
    toolbar: { show: false },
    fontFamily: typo.fontFamily,
  },
  colors: [type === 'up' ? colors.up : colors.down],
  plotOptions: {
    bar: {
      columnWidth: '65%',
      borderRadius: 4,
      dataLabels: { position: 'top' },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => Number(val).toFixed(2),
    offsetY: -20,
    style: {
      fontSize: '10px',
      fontWeight: 600,
      colors: [type === 'up' ? colors.up : colors.down],
    },
  },
  grid: { show: false },
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: { fontSize: '11px', fontWeight: 600, colors: '#595959' },
    },
  },
  yaxis: { show: false },
});

export const getTotalImpactOptions = (type: 'up' | 'down'): ApexOptions => ({
  chart: { type: 'bar', sparkline: { enabled: true } },
  plotOptions: {
    bar: { horizontal: true, barHeight: '100%', borderRadius: 4 },
  },
  colors: [type === 'up' ? colors.up : colors.down],
  xaxis: { categories: ['Tổng'] },
  tooltip: { enabled: false },
});
