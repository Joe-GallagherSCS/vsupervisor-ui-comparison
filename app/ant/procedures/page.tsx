'use client';

import { useState } from 'react';
import { Typography, Card, Select, Table, Badge } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { procedures, Procedure } from '@/data/mock-data';

const { Title, Text } = Typography;

type ProcedureStep = Procedure['steps'][0];

export default function ProceduresPage() {
  const [selectedProcedure, setSelectedProcedure] = useState(procedures[0]?.id || '');

  const currentProcedure = procedures.find((p) => p.id === selectedProcedure);

  const columns: ColumnsType<ProcedureStep> = [
    {
      title: 'STEP',
      key: 'step',
      width: 80,
      render: (_, __, index) => (
        <Badge
          count={index + 1}
          style={{ backgroundColor: '#046bd2' }}
        />
      ),
    },
    {
      title: 'WHO',
      dataIndex: 'who',
      key: 'who',
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'PROCESS',
      dataIndex: 'process',
      key: 'process',
      render: (process: string[]) => (
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {process.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'NOTIFY',
      dataIndex: 'notify',
      key: 'notify',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ margin: 0, color: '#046bd2' }}>Procedures</Title>
        <Select
          style={{ width: 300 }}
          value={selectedProcedure}
          onChange={setSelectedProcedure}
          options={procedures.map((p) => ({ value: p.id, label: p.name }))}
        />
      </div>

      {/* Procedure Details */}
      {currentProcedure && (
        <Card>
          <Title level={4} style={{ marginBottom: 24 }}>{currentProcedure.name}</Title>
          <Table
            columns={columns}
            dataSource={currentProcedure.steps}
            rowKey={(_, index) => `step-${index}`}
            pagination={false}
          />
        </Card>
      )}
    </div>
  );
}
