'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Typography, Card, Table, Button, Descriptions, Tag, Rate, Space, Row, Col, Alert } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { jobs, jobCheckIns, positionAssignments } from '@/data/mock-data';

const { Title, Text } = Typography;

export default function JobDetailPage() {
  const params = useParams();
  const job = jobs.find((j) => j.id === params.id) || jobs[0];
  const checkIns = jobCheckIns.filter((c) => c.jobId === job.id);
  const assignments = positionAssignments.filter((a) => a.jobId === job.id);

  const scheduleColumns: ColumnsType<typeof assignments[0]> = [
    {
      title: 'POSITION',
      key: 'position',
      render: (_, record) => (
        <div>
          <Text strong>{record.position}</Text>
          <br />
          <Link href={`/ant/employees/${record.employeeId}`} style={{ color: '#046bd2', fontSize: 13 }}>
            {record.employeeName}
          </Link>
        </div>
      ),
    },
    { title: 'SUN', dataIndex: ['schedule', 'sun'], key: 'sun', align: 'center', render: (v) => v || '-' },
    { title: 'MON', dataIndex: ['schedule', 'mon'], key: 'mon', align: 'center', render: (v) => v || '-' },
    { title: 'TUE', dataIndex: ['schedule', 'tue'], key: 'tue', align: 'center', render: (v) => v || '-' },
    { title: 'WED', dataIndex: ['schedule', 'wed'], key: 'wed', align: 'center', render: (v) => v || '-' },
    { title: 'THU', dataIndex: ['schedule', 'thu'], key: 'thu', align: 'center', render: (v) => v || '-' },
    { title: 'FRI', dataIndex: ['schedule', 'fri'], key: 'fri', align: 'center', render: (v) => v || '-' },
    { title: 'SAT', dataIndex: ['schedule', 'sat'], key: 'sat', align: 'center', render: (v) => v || '-' },
    { title: 'HRS.', dataIndex: 'totalHours', key: 'hours', align: 'right', render: (v) => <Text strong>{v}</Text> },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space>
          <Title level={3} style={{ margin: 0 }}>Job Detail</Title>
          <Link href="/ant/jobs" style={{ color: '#046bd2', display: 'flex', alignItems: 'center', gap: 4 }}>
            <ArrowLeftOutlined /> Back To Jobs
          </Link>
        </Space>
        <Button type="primary">Send Quality Survey</Button>
      </div>

      {/* Job Info Card */}
      <Card style={{ marginBottom: 24 }}>
        <Title level={4} style={{ color: '#046bd2', marginBottom: 16 }}>
          {job.name} - #{job.id}
        </Title>
        <Row gutter={24}>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Address #1">{job.address1}</Descriptions.Item>
              {job.address2 && <Descriptions.Item label="Address #2">{job.address2}</Descriptions.Item>}
              <Descriptions.Item label="City">{job.city}</Descriptions.Item>
              <Descriptions.Item label="State">{job.state}</Descriptions.Item>
              <Descriptions.Item label="Zip">{job.zip}</Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Contact">{job.contact}</Descriptions.Item>
              <Descriptions.Item label="Phone #1">{job.phone1}</Descriptions.Item>
              <Descriptions.Item label="Email">{job.email}</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        {job.accessNotes && (
          <Alert
            message="Access Notes"
            description={job.accessNotes}
            type="warning"
            style={{ marginTop: 16 }}
          />
        )}
        <Descriptions column={3} size="small" style={{ marginTop: 16 }}>
          <Descriptions.Item label="Supervisor"><Text strong>{job.supervisor}</Text></Descriptions.Item>
          <Descriptions.Item label="Created">{job.createdDate}</Descriptions.Item>
          <Descriptions.Item label="Weekly Budget"><Text strong>${job.weeklyBudget.toFixed(2)}</Text></Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Check-In History */}
      <Card title="Check-In History" style={{ marginBottom: 24 }}>
        {checkIns.length > 0 ? (
          checkIns.map((checkIn) => (
            <Card key={checkIn.id} size="small" style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <Text strong>{checkIn.supervisorName} - Job Check-In:</Text>
                <Space>
                  <Text>Work Quality:</Text>
                  <Rate disabled defaultValue={checkIn.workQuality} style={{ fontSize: 14 }} />
                </Space>
              </div>
              <Row gutter={[8, 8]} style={{ marginBottom: 12 }}>
                {Object.entries(checkIn.assessment).map(([key, value]) => (
                  <Col span={8} key={key}>
                    <Space>
                      {value ? (
                        <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      ) : (
                        <CloseCircleOutlined style={{ color: '#ff4d4f' }} />
                      )}
                      <Text style={{ textTransform: 'capitalize' }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Text>
                    </Space>
                  </Col>
                ))}
              </Row>
              <div style={{ background: '#f5f5f5', padding: 12, borderRadius: 4, marginBottom: 8 }}>
                <Text>{checkIn.observation}</Text>
              </div>
              <Text type="secondary">Completed: {checkIn.completedAt}</Text>
            </Card>
          ))
        ) : (
          <Text type="secondary">No check-ins recorded yet.</Text>
        )}
      </Card>

      {/* Position Summary */}
      <Card title="Position Summary">
        <Table
          columns={scheduleColumns}
          dataSource={assignments}
          rowKey="employeeId"
          size="small"
          pagination={false}
          summary={() => (
            <Table.Summary.Row style={{ background: '#f5f5f5' }}>
              <Table.Summary.Cell index={0} colSpan={8}>
                <Text strong>Total Hours</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={8} align="right">
                <Text strong>{assignments.reduce((sum, a) => sum + a.totalHours, 0)}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />
      </Card>
    </div>
  );
}
