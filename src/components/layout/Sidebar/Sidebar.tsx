'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { NAV_ITEMS } from '@/constants/navigation';

import { Flex, NavLink, Text } from '@mantine/core';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Image
          src="/vninsight-logo.svg"
          alt="VNINSIGHT Logo"
          width={42} // Chỉnh kích thước cho khớp với thiết kế
          height={42}
          priority // Ưu tiên load logo trước
        />
        <span className={styles.brandText}>VnInsight</span>
      </div>
      <nav className={styles.nav}>
        <span className={styles.menu}>Menu</span>
        <div className={styles.navContainer}>
          {NAV_ITEMS.map((item) => {
            const isChildActive = item.links?.some(
              (child) => child.link === pathname,
            );
            const isActive = pathname === item.link || isChildActive;

            return (
              <NavLink
                key={item.label}
                label={item.label}
                leftSection={
                  <item.icon size={22} weight={isActive ? 'fill' : 'duotone'} />
                }
                component="a"
                href={item.link || '#'}
                active={isActive}
                defaultOpened={item.initiallyOpened}
                className={styles.navLink}
                // Tự động mở menu con nếu có item con đang active
              >
                {item.links?.map((child) => (
                  <NavLink
                    key={child.label}
                    label={child.label}
                    component="a"
                    href={child.link}
                    active={pathname === child.link}
                    className={styles.childLink}
                  />
                ))}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
