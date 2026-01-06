'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants/navigation';
import { NavLink } from '@mantine/core';
import styles from './Sidebar.module.scss';
import { CaretRight } from '@phosphor-icons/react';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Image
          src="/vninsight-logo.svg"
          alt="Logo"
          width={36}
          height={36}
          priority
        />
        <span className={styles.brandText}>VnInsight</span>
      </div>

      <nav className={styles.nav}>
        <span className={styles.menu}>Menu</span>
        <div className={styles.navList}>
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!item.links?.length;
            const isChildActive = item.links?.some(
              (child) => pathname === child.link,
            );
            const isActive = !hasChildren && pathname === item.link;

            // --- CASE 1: CÓ MENU CON (Dùng 'div', không quan tâm Link props) ---
            if (hasChildren) {
              return (
                <NavLink
                  key={item.label}
                  label={item.label}
                  className={styles.navLink}
                  active={isActive}
                  defaultOpened={true} // Mặc định mở menu con
                  leftSection={
                    <item.icon
                      size={20}
                      weight={isActive ? 'fill' : 'duotone'}
                    />
                  }
                  rightSection={<CaretRight size={14} />}
                  component="div" // 'div' là string, NavLink chấp nhận ngay
                >
                  {item.links?.map((child) => (
                    <NavLink
                      key={child.label}
                      label={child.label}
                      // Link con thì dùng NextLink bình thường
                      component={Link}
                      href={child.link as string} // Ép kiểu string cho chắc
                      active={pathname === child.link}
                      className={styles.navLink}
                      leftSection={
                        <item.icon
                          size={20}
                          weight={isActive ? 'fill' : 'duotone'}
                        />
                      }
                    />
                  ))}
                </NavLink>
              );
            }

            // --- CASE 2: KHÔNG CÓ MENU CON (Dùng NextLink, ép kiểu href) ---
            return (
              <NavLink
                key={item.label}
                label={item.label}
                className={styles.navLink}
                active={isActive}
                leftSection={
                  <item.icon size={20} weight={isActive ? 'fill' : 'duotone'} />
                }
                rightSection={null}
                component={Link}
                href={item.link as string}
              />
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
