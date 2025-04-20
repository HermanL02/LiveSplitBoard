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
        const response = await fetch('/api/splitwise');
        const data = await response.json();
        setGroups(data.groups);
        const firstGroup = data.groups.find((group: Group) => group.id !== 0);
        if (firstGroup) {
          setSelectedGroup(firstGroup);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
