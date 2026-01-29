'use client';

import Link from 'next/link';
import { Typography, Card, Table, Tag, Button, Space, Row, Col, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ptoRequests } from '@/data/mock-data';

const { Title, Text } = Typography;

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved': return 'success';
    case 'Denied': return 'error';
    case 'Submitted': return 'warning';
    default: return 'default';
  }
};

const columns: ColumnsType<typeof ptoRequests[0]> = [
  {
    title: 'EMPLOYEE',
    dataIndex: 'employeeName',
    key: 'employeeName',
    render: (text, record) => (
      <Link href={`/ant/employees/${record.employeeId}`} style={{ color: '#046bd2', fontWeight: 500 }}>
        {text}
      </Link>
    ),
  },
  {
    title: 'DATE',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'HOURS',
    dataIndex: 'hours',
    key: 'hours',
    align: 'center',
    render: (hours) => <Text strong>{hours}</Text>,
  },
  {
    title: 'SUPERVISOR',
    dataIndex: 'supervisor',
    key: 'supervisor',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (status) => (
      <Tag color={getStatusColor(status)}>{status}</Tag>
    ),
  },
];

export default function PTOReportPage() {
  const approved = ptoRequests.filter((r) => r.status === 'Approved').length;
  const denied = ptoRequests.filter((r) => r.status === 'Denied').length;
  const pending = ptoRequests.filter((r) => r.status === 'Submitted').length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space>
          <Title level={3} style={{ margin: 0, color: '#046bd2' }}>PTO Requests</Title>
          <Link href="/ant/reports" style={{ color: '#046bd2', display: 'flex', alignItems: 'center', gap: 4 }}>
            <ArrowLeftOutlined /> Back To Reports
          </Link>
        </Space>
        <Button type="primary">Export Report</Button>
      </div>

      {/* Stats Row */}
      <Row gutter={24} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Approved"
              value={approved}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Denied"
              value={denied}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Pending"
              value={pending}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      {/* PTO Table */}
      <Card>
        <Table
          columns={columns}
          dataSource={ptoRequests}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '25'],
          }}
        />
      </Card>
    </div>
  );
}
