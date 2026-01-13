import { ApexOptions } from 'apexcharts';
import { CHART_THEME } from '@/styles/chart-theme';

const { colors, typography: typo } = CHART_THEME;

export const getCashFlowOptions = (): ApexOptions => {
  return {
    title: {
      text: 'Phân bổ dòng tiền',
      align: 'center',
      style: {
        fontSize: typo.titleSmall.fontSize as string,
        fontFamily: typo.fontFamily,
        fontWeight: typo.titleSmall.weightMedium as number,
        color: colors.text.secondary,
      },
    },
    chart: {
      type: 'bar',
      toolbar: { show: false },
      fontFamily: typo.fontFamily,
      animations: { enabled: true },
    },
    colors: [colors.up, colors.down, colors.ref],
    plotOptions: {
      bar: {
        distributed: true, // Quan trọng: Để mỗi cột có một màu riêng từ mảng colors
        columnWidth: '50%',
        borderRadius: 6,
        dataLabels: {
          position: 'top', // Hiện số trên đầu cột
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toLocaleString(),
      offsetY: -25, // Đẩy số lên trên đầu cột
      style: {
        fontSize: typo.labelSmall.fontSize as string,
        colors: [colors.text.default],
      },
    },
    legend: { show: false }, // Đã có tên dưới trục X nên không cần legend
    grid: {
      show: false, // Thường bar chart dạng này để nền sạch nhìn chuyên nghiệp hơn
    },
    xaxis: {
      categories: ['Mua chủ động', 'Bán chủ động', 'Tham chiếu'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          fontWeight: 600,
        },
      },
    },
    // BẬT LẠI TRỤC Y Ở ĐÂY
    yaxis: {
      show: true,
      labels: {
        formatter: (val) => val.toLocaleString(),
        style: {
          fontSize: typo.labelSmall.fontSize as string,
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val.toLocaleString()} tỷ`,
      },
    },
  };
};
