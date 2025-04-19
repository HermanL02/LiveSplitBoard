'use client';

import { useEffect, useMemo, useState } from 'react';
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

export default function Home() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const processChartData = (group: Group) => {
    return group.members.map((member) => {
      const balance = member.balance.find(b => b.currency_code === 'CAD');
      return {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/splitwise');
        const data = await response.json();
        setGroups(data.groups);
        const firstGroup = data.groups.find((group: Group) => group.id !== 0);
        if (firstGroup) {
          setSelectedGroup(firstGroup);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
    <main>

      <h1 className="flex justify-center items-center text-2xl text-shadow font-bold">Visual Splitwise</h1>

      <div className="flex justify-center items-center my-4">
        <select
          value={selectedGroup?.id}
          onChange={(e) => {
            const group = groups.find(g => g.id === Number.parseInt(e.target.value));
            setSelectedGroup(group || null);
          }}
        >
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      {selectedGroup && (
        <div>
          <div className="h-[400px] w-full">
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
                        width={0}
                        tick={false}
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
                          formatter: (value: any) => {
                            const data = chartData.find(d => d.amount === value);
                            return data ? `${data.name} ($${Math.abs(value).toFixed(2)})` : '';
                          },
                        }}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.amount >= 0 ? '#4CAF50' : '#FF5252'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )
              : (
                  <div>No data available</div>
                )}
          </div>
        </div>
      )}
    </main>
  );
}
