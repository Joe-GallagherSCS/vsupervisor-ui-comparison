import { ThemeProvider } from '@/components/mui/theme-provider';
import { MuiSidebar } from '@/components/mui/sidebar';

export default function MuiLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MuiSidebar>{children}</MuiSidebar>
    </ThemeProvider>
  );
}
