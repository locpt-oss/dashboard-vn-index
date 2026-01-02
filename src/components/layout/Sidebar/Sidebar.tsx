'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { NAV_ITEMS } from '@/constants/navigation';

import { Flex, Text } from '@mantine/core';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Image
          src="/vninsight-logo.svg"
          alt="VNINSIGHT Logo"
          width={32} // Chỉnh kích thước cho khớp với thiết kế
          height={32}
          priority // Ưu tiên load logo trước
        />
        <Text component="span" className={styles.brandText}>
          {' '}
          VnInsight
        </Text>
      </div>
      {/* <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <div key={item.href} className={styles.navGroup}>
              <Link
                href={item.href}
                className={clsx(styles.navLink, isActive && styles.active)}
              >
                <item.icon className={styles.icon} />
                <span>{item.title}</span>
              </Link>

              {item.subMenu && isActive && (
                <div className={styles.subMenu}>
                  {item.subMenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={clsx(
                        styles.subLink,
                        pathname === sub.href && styles.active,
                      )}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav> */}
    </aside>
  );
};

export default Sidebar;
