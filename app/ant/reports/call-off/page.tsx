'use client';

import Link from 'next/link';
import { Typography, Card, Table, Tag, Button, Space, Row, Col, Statistic } from 'antd';
import { ArrowLeftOutlined, PlayCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { callOffs } from '@/data/mock-data';

const { Title, Text } = Typography;

const getReasonColor = (reason: string) => {
  switch (reason) {
    case 'Sick': return 'error';
    case 'Personal': return 'blue';
    case 'Family Emergency': return 'warning';
    case 'No Show': return 'default';
    default: return 'default';
  }
};

const columns: ColumnsType<typeof callOffs[0]> = [
  {
    title: 'DATE/TIME',
    dataIndex: 'dateTime',
    key: 'dateTime',
    render: (text) => <Text strong>{text}</Text>,
  },
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
    title: 'REASON',
    dataIndex: 'reason',
    key: 'reason',
    align: 'center',
    render: (reason) => (
      <Tag color={getReasonColor(reason)}>{reason}</Tag>
    ),
  },
  {
    title: 'RECORDING',
    dataIndex: 'hasRecording',
    key: 'hasRecording',
    align: 'center',
    render: (hasRecording) => hasRecording ? (
      <Button type="link" icon={<PlayCircleOutlined />} size="small">Play</Button>
    ) : (
      <Text type="secondary">-</Text>
    ),
  },
];

export default function CallOffReportPage() {
  const sickCount = callOffs.filter((c) => c.reason === 'Sick').length;
  const noShowCount = callOffs.filter((c) => c.reason === 'No Show').length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space>
          <Title level={3} style={{ margin: 0, color: '#046bd2' }}>Call-Off Report</Title>
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
              title="Total Call-Offs"
              value={callOffs.length}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Sick"
              value={sickCount}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="No Shows"
              value={noShowCount}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Call-Off Table */}
      <Card>
        <Table
          columns={columns}
          dataSource={callOffs}
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
