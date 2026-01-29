'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Typography, Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { jobs } from '@/data/mock-data';

const { Title } = Typography;

interface Job {
  id: string;
  name: string;
  contact: string;
}

const columns: ColumnsType<Job> = [
  {
    title: 'JOB',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <Link href={`/ant/jobs/${record.id}`} style={{ color: '#046bd2', fontWeight: 500 }}>
        {text}
      </Link>
    ),
  },
  {
    title: 'CONTACT',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'SUPPLIES',
    key: 'supplies',
    align: 'right',
    render: () => (
      <Button type="link" size="small">Order</Button>
    ),
  },
];

export default function JobsPage() {
  const [searchText, setSearchText] = useState('');

  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchText.toLowerCase()) ||
    job.contact.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ margin: 0, color: '#046bd2' }}>Jobs</Title>
        <Input
          placeholder="Search jobs..."
          prefix={<SearchOutlined />}
          style={{ width: 300 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Jobs Table */}
      <Table
        columns={columns}
        dataSource={filteredJobs}
        rowKey="id"
        pagination={{
          pageSize: 15,
          showSizeChanger: true,
          pageSizeOptions: ['10', '15', '25'],
          showTotal: (total) => `Total ${total} jobs`,
        }}
      />
    </div>
  );
}
