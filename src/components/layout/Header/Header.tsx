'use client';

import { usePathname } from 'next/navigation';
import { Breadcrumbs, Anchor, Text, Group } from '@mantine/core';
import Link from 'next/link';
import styles from './Header.module.scss';
import { CaretRight } from '@phosphor-icons/react';

const Header = () => {
  const pathname = usePathname();

  // Logic bóc tách URL: /investor/foreign -> ['investor', 'foreign']
  const pathSegments = pathname.split('/').filter((item) => item !== '');

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSegments.length - 1;

    // Format chữ: foreign -> Foreign
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);

    return isLast ? (
      <Text key={index} size="sm" fw={600} className={styles.activeBreadcrumb}>
        {label}
      </Text>
    ) : (
      <Anchor
        component={Link}
        href={href}
        key={index}
        size="sm"
        className={styles.inactiveBreadcrumb}
      >
        {label}
      </Anchor>
    );
  });
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Phần bên trái: Breadcrumb */}
        <div className={styles.leftSection}>
          <Breadcrumbs
            separator={<CaretRight size={12} weight="bold" opacity={0.4} />}
            separatorMargin="sm"
            mt={'xs'}
          >
            {/* Chữ "Dashboards" đóng vai trò là gốc (root) */}
            <Anchor
              component={Link}
              href="/"
              size="sm"
              className={styles.inactiveBreadcrumb}
            >
              Dashboards
            </Anchor>
            {breadcrumbItems}
          </Breadcrumbs>
        </div>

        {/* Phần bên phải: Search hoặc User Profile (Mày có thể thêm sau) */}
        <Group className={styles.rightSection}>
          {/* Ví dụ: <div className={styles.userAvatar}>...</div> */}
        </Group>
      </div>
    </header>
  );
};

export default Header;
