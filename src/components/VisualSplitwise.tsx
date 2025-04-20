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

type VisualSplitwiseProps = {
  groups: Group[];
  selectedGroup: Group | null;
  onGroupChange: (group: Group) => void;
};

export default function VisualSplitwise({ groups, selectedGroup, onGroupChange }: VisualSplitwiseProps) {
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
    if (!selectedGroup) {
      return [];
    }
    return processChartData(selectedGroup);
  }, [selectedGroup]);

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

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Visual Splitwise</h1>

      <div className="flex justify-center items-center my-4">
        <select
          className="select select-bordered w-full max-w-xs bg-base-100 shadow-lg rounded-lg border-2 border-base-300 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-center bg-black text-white"
          value={selectedGroup?.id}
          onChange={(e) => {
            const group = groups.find(g => g.id === Number.parseInt(e.target.value));
            if (group) {
              onGroupChange(group);
            }
          }}
        >
          <option disabled selected className="bg-black text-white">Select Options</option>
          {groups.map(group => (
            <option key={group.id} value={group.id} className="bg-black text-white">
              {group.name}
            </option>
          ))}
        </select>
      </div>

      {selectedGroup && (
        <div className="w-full">
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
      )}
    </div>
  );
}
