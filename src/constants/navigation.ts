import {
  LayoutDashboard,
  Users2,
  Zap,
  PieChart,
  CalendarDays,
  Target,
} from 'lucide-react';

export const NAV_ITEMS = [
  {
    title: 'Tổng quan',
    href: '/overview',
    icon: LayoutDashboard,
  },
  {
    title: 'Chủ thể',
    href: '/investors',
    icon: Users2,
    subMenu: [
      { title: 'Nước ngoài', href: '/investors/foreign' },
      { title: 'Tự doanh', href: '/investors/proprietary' },
      { title: 'Truy vết dòng tiền', href: '/investors/tracker', icon: Target },
    ],
  },
  {
    title: 'Ngành',
    href: '/industries',
    icon: PieChart,
  },
  {
    title: 'Tín hiệu',
    href: '/signals',
    icon: Zap,
  },
  {
    title: 'Lịch cổ tức',
    href: '/dividends',
    icon: CalendarDays,
  },
];
