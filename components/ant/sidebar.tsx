'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layout, Menu, Avatar, Dropdown, Badge, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  ProjectOutlined,
  FileTextOutlined,
  FormOutlined,
  BarChartOutlined,
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { currentUser } from '@/data/mock-data';

const { Sider, Header, Content } = Layout;

const menuItems: MenuProps['items'] = [
  {
    key: '/ant',
    icon: <DashboardOutlined />,
    label: <Link href="/ant">Dashboard</Link>,
  },
  {
    key: '/ant/jobs',
    icon: <ProjectOutlined />,
    label: (
      <Link href="/ant/jobs" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Jobs</span>
        <Badge count={2} size="small" />
      </Link>
    ),
  },
  {
    key: '/ant/employees',
    icon: <TeamOutlined />,
    label: (
      <Link href="/ant/employees" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Employees</span>
        <Badge count={3} size="small" />
      </Link>
    ),
  },
  {
    key: '/ant/procedures',
    icon: <FileTextOutlined />,
    label: <Link href="/ant/procedures">Procedures</Link>,
  },
  {
    key: '/ant/forms',
    icon: <FormOutlined />,
    label: <Link href="/ant/forms">Forms</Link>,
  },
  {
    key: '/ant/reports',
    icon: <BarChartOutlined />,
    label: <Link href="/ant/reports">Reports</Link>,
  },
];

const userMenuItems: MenuProps['items'] = [
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: 'Profile',
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: <Link href="/login">Logout</Link>,
    danger: true,
  },
];

export function AntSidebar({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { token } = theme.useToken();

  const selectedKeys = menuItems
    ?.filter((item) => item && 'key' in item && pathname.startsWith(item.key as string))
    .map((item) => (item && 'key' in item ? (item.key as string) : ''))
    .filter(Boolean);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: '#1e293b',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
        width={260}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: collapsed ? 0 : '0 24px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {collapsed ? (
            <span style={{ fontSize: 24 }}>S</span>
          ) : (
            <span style={{ color: 'white', fontWeight: 700, fontSize: 18 }}>
              vSupervisor
            </span>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          items={menuItems}
          style={{
            background: 'transparent',
            borderRight: 0,
            marginTop: 8,
          }}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 260, transition: 'margin-left 0.2s' }}>
        <Header
          style={{
            padding: '0 24px',
            background: token.colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${token.colorBorderSecondary}`,
            position: 'sticky',
            top: 0,
            zIndex: 99,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={() => setCollapsed(false)}
                style={{ fontSize: 18, cursor: 'pointer' }}
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => setCollapsed(true)}
                style={{ fontSize: 18, cursor: 'pointer' }}
              />
            )}
            <span style={{ fontWeight: 600, color: '#046bd2' }}>
              vSupervisor Services
            </span>
          </div>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <span>{currentUser.name}</span>
              <Avatar style={{ backgroundColor: '#046bd2' }}>
                {currentUser.name.charAt(0)}
              </Avatar>
            </div>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: 24,
            padding: 24,
            background: token.colorBgContainer,
            borderRadius: token.borderRadiusLG,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
