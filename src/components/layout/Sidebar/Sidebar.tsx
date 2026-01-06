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
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!item.links?.length;
            // Kiểm tra xem có con nào đang active không
            const isChildActive = item.links?.some(
              (child) => pathname === child.link,
            );
            // Thằng cha chỉ được coi là "active" nếu nó KHÔNG có con và URL khớp
            const isActive = !hasChildren && pathname === item.link;

            return (
              <NavLink
                key={item.label}
                label={item.label}
                className={styles.navLink}
                active={isActive}
                defaultOpened={item.initiallyOpened || isChildActive}
                href={hasChildren ? undefined : item.link}
                component={hasChildren ? 'div' : 'a'}
                leftSection={
                  <item.icon size={20} weight={isActive ? 'fill' : 'duotone'} />
                }
                rightSection={hasChildren && <CaretRight size={14} />}
              >
                {item.links?.map((child) => (
                  <NavLink
                    key={child.label}
                    label={child.label}
                    className={styles.childLink}
                    href={child.link}
                    component="a"
                    active={pathname === child.link}
                    leftSection={<item.icon size={20} weight="duotone" />}
                    rightSection={<CaretRight size={14} />}
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
