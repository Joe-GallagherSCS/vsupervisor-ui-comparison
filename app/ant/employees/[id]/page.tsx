'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Typography, Card, Button, Descriptions, Tag, Space, Row, Col, Statistic, List } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { employees, ptoRequests } from '@/data/mock-data';

const { Title, Text } = Typography;

export default function EmployeeDetailPage() {
  const params = useParams();
  const employee = employees.find((e) => e.id === params.id) || employees[0];
  const employeePTO = ptoRequests.filter((p) => p.employeeId === employee.id);

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space>
          <Title level={3} style={{ margin: 0 }}>Employee Detail</Title>
          <Link href="/ant/employees" style={{ color: '#046bd2', display: 'flex', alignItems: 'center', gap: 4 }}>
            <ArrowLeftOutlined /> Back To Employees
          </Link>
        </Space>
        <Button type="primary">Edit Employee</Button>
      </div>

      {/* Employee Info Card */}
      <Card style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <Title level={4} style={{ color: '#046bd2', margin: 0 }}>
            {employee.name}
          </Title>
          <Tag color={employee.status === 'Active' ? 'success' : 'default'}>{employee.status}</Tag>
        </div>
        <Row gutter={24}>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Role"><Text strong>{employee.role}</Text></Descriptions.Item>
              <Descriptions.Item label="Employee ID">{employee.id}</Descriptions.Item>
              <Descriptions.Item label="Email">{employee.email}</Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Phone">{employee.phone1}</Descriptions.Item>
              <Descriptions.Item label="Hire Date">{employee.hireDate}</Descriptions.Item>
              <Descriptions.Item label="Address">
                {employee.address}, {employee.city}, {employee.state} {employee.zip}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {/* PTO Balance Card */}
      <Card title="PTO Balance" style={{ marginBottom: 24 }}>
        <div style={{ textAlign: 'center', padding: 24, background: '#e6f7ff', borderRadius: 8 }}>
          <Statistic
            title={<span style={{ fontSize: 14 }}>Available Hours (as of {employee.ptoAsOf})</span>}
            value={employee.ptoBalance}
            valueStyle={{ color: '#046bd2', fontWeight: 700 }}
            suffix="hours"
          />
        </div>
      </Card>

      {/* Recent PTO Requests */}
      <Card title="Recent PTO Requests">
        {employeePTO.length > 0 ? (
          <List
            dataSource={employeePTO}
            renderItem={(pto) => (
              <List.Item
                extra={
                  <Tag color={
                    pto.status === 'Approved' ? 'success' :
                    pto.status === 'Denied' ? 'error' : 'warning'
                  }>
                    {pto.status}
                  </Tag>
                }
              >
                <List.Item.Meta
                  title={pto.date}
                  description={`${pto.hours} hours • Supervisor: ${pto.supervisor}`}
                />
              </List.Item>
            )}
          />
        ) : (
          <Text type="secondary">No PTO requests on file.</Text>
        )}
      </Card>
    </div>
  );
}
