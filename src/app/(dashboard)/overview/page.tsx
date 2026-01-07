'use client';

import styles from './Overview.module.scss';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.stats}>
        <h3>VN-INDEX</h3>
        <div className={styles.values}>
          <span className={styles.indexValue}>1,234.56</span>
          <span className={styles.change}>+17.59</span>
          <span className={styles.percentage}> (+1.00%)</span>
        </div>
        <div className={styles.additionalInfo}>
          <div className={styles.updated}>
            <span>Updated:</span>
            <span>15:10 - 31/12/2025</span>
          </div>
          <div className={styles.totalVolume}>
            <span>Total Volume:</span>
            <span>704,538,818 CP</span>
          </div>
          <div className={styles.transactionValue}>
            <span>Transaction Value:</span>
            <span>22,350 tỷ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
