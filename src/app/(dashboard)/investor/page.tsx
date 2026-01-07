import { redirect } from 'next/navigation';

export default function InvestorPage() {
  // Tự động chuyển hướng về mục con đầu tiên
  redirect('/investor/foreign');
}
