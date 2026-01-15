import dynamic from 'next/dynamic';

export const StockStatusChart = dynamic(() => import('./StockStatusChart'), {
  ssr: false,
});

export const CashFlowChart = dynamic(() => import('./CashFlowChart'), {
  ssr: false,
});

export const IndexImpactChart = dynamic(() => import('./IndexImpactChart'), {
  ssr: false,
});
