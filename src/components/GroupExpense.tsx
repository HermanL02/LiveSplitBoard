'use client';

import { useEffect, useState } from 'react';

type Expense = {
  id: number;
  description: string;
  cost: string;
  currency_code: string;
  date: string;
  created_by: {
    id: number;
    first_name: string;
    last_name: string | null;
  };
  users: {
    user: {
      id: number;
      first_name: string;
      last_name: string | null;
    };
    paid_share: string;
    owed_share: string;
  }[];
};

type GroupExpenseProps = {
  groupId: number | null;
};

export default function GroupExpense({ groupId }: GroupExpenseProps) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      if (!groupId) {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/splitwise/groups/${groupId}/expenses`);
        if (!response.ok) {
          throw new Error('Failed to fetch expenses');
        }
        const data = await response.json();
        setExpenses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, [groupId]);

  if (!groupId) {
    return <div className="text-center text-gray-500">Please select a group</div>;
  }

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="mt-8">
      <div className="mx-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 text-xl">Description</th>
              <th className="text-center px-4 py-2 text-xl">Amount</th>
              <th className="text-center px-4 py-2 text-xl">Participants</th>
              <th className="text-right px-4 py-2 text-xl">Date</th>
            </tr>
          </thead>
          <tbody>
            {[...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(expense => (
              <tr key={expense.id}>
                <td className="text-left px-4 py-2 text-xl">{expense.description}</td>
                <td className="text-center px-4 py-2 text-xl">
                  {expense.cost}
                  {' '}
                  {expense.currency_code.charAt(0)}
                </td>
                <td className="text-center px-4 py-2 text-xl">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {expense.users.map(user => (
                      <span key={user.user.id} className="text-xl">
                        {user.user.first_name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="text-right px-4 py-2 text-xl">
                  {new Date(expense.date).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
