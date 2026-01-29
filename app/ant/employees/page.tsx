'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Typography, Table, Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { employees } from '@/data/mock-data';

const { Title } = Typography;

interface Employee {
  id: string;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const columns: ColumnsType<Employee> = [
  {
    title: 'EMPLOYEE',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <Link href={`/ant/employees/${record.id}`} style={{ color: '#046bd2', fontWeight: 500 }}>
        {text}
      </Link>
    ),
  },
  {
    title: 'ROLE',
    dataIndex: 'role',
    key: 'role',
    render: (text) => <span style={{ fontWeight: 500 }}>{text}</span>,
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    align: 'right',
    render: (status) => (
      <Tag color={status === 'Active' ? 'success' : 'default'}>{status}</Tag>
    ),
  },
];

export default function EmployeesPage() {
  const [searchText, setSearchText] = useState('');

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ margin: 0, color: '#046bd2' }}>Employees</Title>
        <Input
          placeholder="Search employees..."
          prefix={<SearchOutlined />}
          style={{ width: 300 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Employees Table */}
      <Table
        columns={columns}
        dataSource={filteredEmployees}
        rowKey="id"
        pagination={{
          pageSize: 15,
          showSizeChanger: true,
          pageSizeOptions: ['10', '15', '25'],
          showTotal: (total) => `Total ${total} employees`,
        }}
      />
    </div>
  );
}
