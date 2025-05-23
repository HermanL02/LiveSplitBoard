'use client';

import VisualSplitwise from '@/components/VisualSplitwise';
import { useEffect, useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/splitwise/groups/info');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.warn(data);
        if (!data.groups || !Array.isArray(data.groups)) {
          throw new Error('Invalid data format received from API');
        }

        setGroups(data.groups);
        const firstGroup = data.groups.find((group: Group) => group.id !== 0);
        if (firstGroup) {
          setSelectedGroup(firstGroup);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch data');
        setGroups([]);
        setSelectedGroup(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
  }

  return (
    <main>
      <VisualSplitwise
        groups={groups}
        selectedGroup={selectedGroup}
        onGroupChange={group => setSelectedGroup(group)}
      />
    </main>
  );
}
