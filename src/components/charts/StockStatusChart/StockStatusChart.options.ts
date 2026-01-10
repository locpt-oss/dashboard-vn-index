import { ApexOptions } from 'apexcharts';
import { CHART_THEME } from '@/styles/chart-theme';

const { colors, typography: typo } = CHART_THEME;

export const getStockStatusOptions = (): ApexOptions => ({
  // Legend (Chú thích)
  title: {
    text: 'Số lượng cổ phiếu tăng, giảm hoặc tham chiếu',
    align: 'center',
    style: {
      fontSize: typo.titleSmall.fontSize as string,
      fontFamily: typo.fontFamily,
      fontWeight: typo.titleSmall.weightMedium as number,
      color: colors.text.secondary,
    },
  },
  chart: {
    type: 'pie',
    fontFamily: typo.fontFamily,
    toolbar: { show: false },
  },
  grid: {
    padding: {
      top: 12,
    },
  },
  labels: ['Trần', 'Tăng', 'Tham chiếu', 'Giảm', 'Sàn'],
  colors: [colors.ceiling, colors.up, colors.ref, colors.down, colors.floor],
  legend: {
    show: true,
    fontFamily: typo.fontFamily,
    fontSize: typo.bodyMedium.fontSize as string,
    fontWeight: typo.bodyMedium.weightRegular as number,
    labels: {
      colors: colors.text.secondary,
    },
    position: 'bottom',
    markers: {
      size: 5,
      strokeWidth: 0,
      offsetX: -4,
    },
    itemMargin: {
      horizontal: 12,
    },
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
    active: {
      filter: {
        type: 'none', // Tắt hiệu ứng khi click vào miếng bánh
      },
    },
  },
  dataLabels: {
    formatter: function (val, opts) {
      return opts.w.config.series[opts.seriesIndex].toLocaleString();
    },
    dropShadow: {
      enabled: false, // Tắt cái bóng đổ đi cho text nó sạch
    },
    style: {
      fontFamily: typo.fontFamily,
      fontSize: typo.labelMedium.fontSize as string,
      fontWeight: typo.labelMedium.weightSemibold as number,
    },
  },
  tooltip: {
    enabled: false,
  },
});
