'use client';

import Link from 'next/link';
import { Typography, Card, Row, Col } from 'antd';
import {
  ProjectOutlined,
  TeamOutlined,
  ExceptionOutlined,
  CalendarOutlined,
  PhoneOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const reportCategories = [
  {
    title: 'Jobs Report',
    description: 'View job performance metrics, budget analysis, and service history.',
    icon: <ProjectOutlined style={{ fontSize: 28 }} />,
    href: '/ant/jobs',
    color: '#046bd2',
  },
  {
    title: 'Employees Report',
    description: 'Employee performance, attendance tracking, and work history.',
    icon: <TeamOutlined style={{ fontSize: 28 }} />,
    href: '/ant/employees',
    color: '#059669',
  },
  {
    title: 'Deviation Report',
    description: 'Track schedule deviations, missed services, and exceptions.',
    icon: <ExceptionOutlined style={{ fontSize: 28 }} />,
    href: '#',
    color: '#dc2626',
  },
  {
    title: 'PTO Requests',
    description: 'View and manage paid time off requests and balances.',
    icon: <CalendarOutlined style={{ fontSize: 28 }} />,
    href: '/ant/reports/pto',
    color: '#7c3aed',
  },
  {
    title: 'Call-Off Report',
    description: 'Track employee call-offs, absences, and related patterns.',
    icon: <PhoneOutlined style={{ fontSize: 28 }} />,
    href: '/ant/reports/call-off',
    color: '#ea580c',
  },
  {
    title: 'Custom Reports',
    description: 'Build and export custom reports with advanced filters.',
    icon: <BarChartOutlined style={{ fontSize: 28 }} />,
    href: '#',
    color: '#0891b2',
  },
];

export default function ReportsPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0, color: '#046bd2' }}>Reports</Title>
        <Text type="secondary">Select a report category to view detailed analytics and data.</Text>
      </div>

      {/* Report Cards Grid */}
      <Row gutter={[24, 24]}>
        {reportCategories.map((report) => (
          <Col xs={24} md={12} lg={8} key={report.title}>
            <Link href={report.href} style={{ display: 'block' }}>
              <Card
                hoverable
                style={{ height: '100%' }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 8,
                    background: `${report.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    color: report.color,
                  }}
                >
                  {report.icon}
                </div>
                <Title level={5} style={{ margin: '0 0 8px 0' }}>{report.title}</Title>
                <Text type="secondary">{report.description}</Text>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
