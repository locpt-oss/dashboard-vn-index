// src/app/(dashboard)/layout.tsx
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import styles from './DashboardLayout.module.scss';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Phần nội dung bên phải */}
      <div className={styles.mainArea}>
        {/* Header chứa Breadcrumb nằm trên cùng */}
        <Header />

        {/* Nội dung thay đổi theo từng Route */}
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
