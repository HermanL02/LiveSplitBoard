'use client';

import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Member = {
  id: number;
  first_name: string;
  last_name: string | null;
  balance: Array<{
    currency_code: string;
    amount: string;
  }>;
};

type Group = {
  id: number;
  name: string;
  members: Member[];
};

type GroupChartProps = {
  group: Group | null;
};

export default function GroupChart({ group }: GroupChartProps) {
  const processChartData = (group: Group) => {
    return group.members.map((member) => {
      const balance = member.balance.find(b => b.currency_code === 'CAD');
      return {
        id: member.id,
        name: member.first_name,
        amount: balance ? Number.parseFloat(balance.amount) : 0,
      };
    });
  };

  const chartData = useMemo(() => {
    if (!group) {
      return [];
    }
    return processChartData(group);
  }, [group]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p>{label}</p>
          <p>
            {payload[0].value > 0 ? 'To Receive' : 'To Pay'}
            : $
            {Math.abs(payload[0].value).toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  if (!group) {
    return <div className="flex items-center justify-center h-full text-gray-500">No group selected</div>;
  }

  return (
    <div className="w-full mx-4">
      <div className="h-96 w-full">
        {chartData.length > 0
          ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                  barGap={8}
                  barSize={40}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{
                      fill: '#fff',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="amount"
                    radius={[0, 4, 4, 0]}
                    barSize={40}
                    label={{
                      position: 'inside',
                      fill: '#fff',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    {chartData.map((entry: any) => (
                      <Cell key={entry.id} fill={entry.amount >= 0 ? '#4CAF50' : '#FF5252'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )
          : (
              <div className="flex items-center justify-center h-full text-gray-500">No data available</div>
            )}
      </div>
    </div>
  );
}
