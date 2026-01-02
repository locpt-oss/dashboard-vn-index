// src/constants/navigation.ts
import {
  House,
  UsersThree,
  ChartPieSlice,
  TrendUp,
  CalendarBlank,
} from '@phosphor-icons/react';

export const NAV_ITEMS = [
  {
    label: 'Overview',
    icon: House,
    link: '/dashboard',
  },
  {
    label: 'Investor',
    icon: UsersThree,
    initiallyOpened: true, // Mặc định mở rộng như trong ảnh
    links: [
      { label: 'Foreign', link: '/investor/foreign' },
      { label: 'Proprietary', link: '/investor/proprietary' },
      { label: 'Tracker', link: '/investor/tracker' },
    ],
  },
  {
    label: 'Industries',
    icon: ChartPieSlice,
    link: '/industries',
  },
  {
    label: 'Signals',
    icon: TrendUp,
    link: '/signals',
  },
  {
    label: 'Dividends',
    icon: CalendarBlank,
    link: '/dividends',
  },
];
