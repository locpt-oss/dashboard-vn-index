'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumbs,
  Anchor,
  Text,
  Group,
  ActionIcon,
  Avatar,
  TextInput,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import Link from 'next/link';
import styles from './Header.module.scss';
import { CaretRight, MagnifyingGlass, Moon, Sun } from '@phosphor-icons/react';

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

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Phần bên trái: Breadcrumb */}
        <div className={styles.leftSection}>
          <Breadcrumbs
            separator={<CaretRight size={12} weight="bold" opacity={0.4} />}
            separatorMargin="sm"
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

        <div className={styles.rightSection}>
          {/* 1. Search Box */}
          <TextInput
            placeholder="Search"
            leftSection={<MagnifyingGlass size={16} weight="regular" />}
            className={styles.searchBox}
            variant="default"
            radius="md"
          />

          <div className={styles.actionIcon}>
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === 'light' ? 'dark' : 'light',
                )
              }
              variant="subtle"
              color="gray"
              size="lg"
              radius="md"
              aria-label="Toggle color scheme"
            >
              {computedColorScheme === 'light' ? (
                <Moon size={20} weight="fill" />
              ) : (
                <Sun size={20} weight="fill" />
              )}
            </ActionIcon>

            {/* 3. Avatar */}
            <Avatar
              src={null}
              alt="no image here"
              size={'sm'}
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
