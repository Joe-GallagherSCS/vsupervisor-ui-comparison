import { ShadcnSidebar } from '@/components/shadcn/sidebar';

export default function ShadcnLayout({ children }: { children: React.ReactNode }) {
  return <ShadcnSidebar>{children}</ShadcnSidebar>;
}
