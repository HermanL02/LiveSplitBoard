'use client';

import GroupChart from './GroupChart';
import GroupExpense from './GroupExpense';

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

      <GroupChart group={selectedGroup} />
      <h1 className="text-2xl font-bold text-center mb-4">Expenses</h1>
      <GroupExpense groupId={selectedGroup?.id ?? null} />
    </div>
  );
}
