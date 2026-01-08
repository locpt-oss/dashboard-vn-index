import dynamic from 'next/dynamic';

export const StockStatusChart = dynamic(() => import('./StockStatusChart'), {
  ssr: false,
});
