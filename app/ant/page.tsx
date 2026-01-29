'use client';

import Link from 'next/link';
import { Typography, Card, Table, Tag, Alert, Space, Button, Descriptions } from 'antd';
import { WarningOutlined, ClockCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { jobAlerts, openTimesheets, currentUser, dashboardStats } from '@/data/mock-data';

const { Title, Text } = Typography;

interface OpenTimesheet {
  id: string;
  date: string;
  jobId: string;
  jobName: string;
  employeeId: string;
  employeeName: string;
  inTime: string;
}

const timesheetColumns: ColumnsType<OpenTimesheet> = [
  {
    title: 'DATE',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <Link href="#" style={{ color: '#046bd2' }}>{text}</Link>,
  },
  {
    title: 'JOB',
    dataIndex: 'jobName',
    key: 'jobName',
    render: (text, record) => (
      <Link href={`/ant/jobs/${record.jobId}`} style={{ color: '#046bd2' }}>
        {text}
      </Link>
    ),
  },
  {
    title: 'EMPLOYEE',
    dataIndex: 'employeeName',
    key: 'employeeName',
    render: (text, record) => (
      <Link href={`/ant/employees/${record.employeeId}`} style={{ color: '#046bd2' }}>
        {text}
      </Link>
    ),
  },
  {
    title: 'IN',
    dataIndex: 'inTime',
    key: 'inTime',
  },
];

export default function AntDashboard() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <Space align="center" size="middle">
            <Title level={3} style={{ margin: 0 }}>Dashboard</Title>
            <Link href="#" style={{ color: '#046bd2' }}>[Quality Inspections]</Link>
          </Space>
          {currentUser.currentPunchIn && (
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <ClockCircleOutlined />
              <Text type="secondary">
                {currentUser.currentPunchIn.jobName} - Punch In: {currentUser.currentPunchIn.punchInTime}
              </Text>
              <Button danger size="small">Punch Out</Button>
            </div>
          )}
        </div>
      </div>

      {/* Check-Ins Past Due Alert */}
      <Alert
        message={
          <Text strong>
            Check-Ins Past Due:{' '}
            <Link href="/ant/jobs" style={{ color: '#046bd2' }}>
              {dashboardStats.checkInsPastDue.jobs} Jobs
            </Link>
            {' & '}
            <Link href="/ant/employees" style={{ color: '#046bd2' }}>
              {dashboardStats.checkInsPastDue.employees} Employees
            </Link>
          </Text>
        }
        type="warning"
        icon={<WarningOutlined />}
        showIcon
        style={{ marginBottom: 24 }}
      />

      {/* Job Alerts Section */}
      <Card
        title={<span style={{ color: 'white' }}>Job Alerts ({jobAlerts.length})</span>}
        headStyle={{ background: '#dc2626', borderBottom: 'none' }}
        bodyStyle={{ padding: 0 }}
        style={{ marginBottom: 24 }}
      >
        {jobAlerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              padding: 16,
              borderBottom: '1px solid #f0f0f0',
              background: '#fef2f2',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
          >
            <Tag color="error" style={{ fontWeight: 600 }}>Job Alert</Tag>
            <Text>
              <Link href={`/ant/jobs/${alert.jobId}`} style={{ color: '#046bd2', fontWeight: 600 }}>
                {alert.jobName}
              </Link>
              {' '}has yet to be serviced for {alert.serviceDate}. Job alert acknowledged by{' '}
              <Text strong>{alert.acknowledgedBy}</Text>.
            </Text>
          </div>
        ))}
      </Card>

      {/* Open Timesheets Section */}
      <Card
        title={`Open Timesheets (${openTimesheets.length})`}
        extra={<Text type="secondary">Updated {dashboardStats.lastUpdated}</Text>}
      >
        <Table
          columns={timesheetColumns}
          dataSource={openTimesheets}
          rowKey="id"
          size="small"
          pagination={false}
        />
      </Card>
    </div>
  );
}
