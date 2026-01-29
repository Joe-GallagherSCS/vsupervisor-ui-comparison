import { AntThemeProvider } from '@/components/ant/theme-provider';
import { AntSidebar } from '@/components/ant/sidebar';

export default function AntLayout({ children }: { children: React.ReactNode }) {
  return (
    <AntThemeProvider>
      <AntSidebar>{children}</AntSidebar>
    </AntThemeProvider>
  );
}
