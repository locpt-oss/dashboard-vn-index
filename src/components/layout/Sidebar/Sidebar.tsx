'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { NAV_ITEMS } from '@/constants/navigation';

import { Flex, NavLink, Text } from '@mantine/core';
import styles from './Sidebar.module.scss';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Image
          src="/vninsight-logo.svg"
          alt="VNINSIGHT Logo"
          width={36} // Chỉnh kích thước cho khớp với thiết kế
          height={36}
          priority // Ưu tiên load logo trước
        />
        <span className={styles.brandText}>VnInsight</span>
      </div>
      <nav className={styles.nav}>
        <span className={styles.menu}>Menu</span>
        <div className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              className={styles.navLink}
              leftSection={<item.icon size={20} weight="duotone" />}
              rightSection={item.links && <CaretRight size={14} />}
            >
              {item.links?.map((child) => (
                <NavLink
                  key={child.label}
                  label={child.label}
                  className={styles.childLink}
                />
              ))}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
