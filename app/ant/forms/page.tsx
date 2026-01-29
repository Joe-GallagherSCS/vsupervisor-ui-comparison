'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Typography, Table, Input, Tag, Button } from 'antd';
import { SearchOutlined, FileTextOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { employeeForms } from '@/data/mock-data';

const { Title } = Typography;

const getFormTypeColor = (formType: string) => {
  const colors: Record<string, string> = {
    COUNSELING: 'orange',
    RESIGNATION: 'red',
    PAYROLL: 'blue',
    PERFORMANCE: 'green',
    DISCIPLINE: 'red',
    INJURY: 'orange',
  };
  return colors[formType] || 'default';
};

const columns: ColumnsType<typeof employeeForms[0]> = [
  {
    title: 'FORM TYPE',
    dataIndex: 'formType',
    key: 'formType',
    render: (formType) => (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <FileTextOutlined />
        <Tag color={getFormTypeColor(formType)}>{formType}</Tag>
      </span>
    ),
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
    title: 'NEXT DATE',
    dataIndex: 'nextDate',
    key: 'nextDate',
    render: (date) => date || '-',
  },
  {
    title: 'ACTION',
    key: 'action',
    align: 'right',
    render: (_, record) => (
      <Button type="link" size="small">
        {record.editUrl ? 'Edit' : 'View'}
      </Button>
    ),
  },
];

export default function FormsPage() {
  const [searchText, setSearchText] = useState('');

  const filteredForms = employeeForms.filter((form) =>
    form.employeeName.toLowerCase().includes(searchText.toLowerCase()) ||
    form.formType.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ margin: 0, color: '#046bd2' }}>Forms</Title>
        <Input
          placeholder="Search forms..."
          prefix={<SearchOutlined />}
          style={{ width: 300 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Forms Table */}
      <Table
        columns={columns}
        dataSource={filteredForms}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '25'],
          showTotal: (total) => `Total ${total} forms`,
        }}
      />
    </div>
  );
}
