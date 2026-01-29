'use client';

import { ConfigProvider } from 'antd';

export function AntThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#046bd2',
          colorLink: '#046bd2',
          colorLinkHover: '#045cb4',
          fontFamily: 'DM Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
          borderRadius: 6,
        },
        components: {
          Menu: {
            darkItemBg: '#1e293b',
            darkSubMenuItemBg: '#1e293b',
            darkItemSelectedBg: '#046bd2',
          },
          Layout: {
            siderBg: '#1e293b',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
