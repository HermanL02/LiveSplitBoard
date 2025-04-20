import { initializeMongoDB } from '@/lib/mongodb/init';
import Expense from '@/models/Expense';
import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; groupId: string }> },
) {
  try {
    await initializeMongoDB();
    // Get most recent 10 expenses from DB
    const { groupId } = await params;
    const groupIdNum = Number.parseInt(groupId);
    const expenses = await Expense.find({ group_id: groupIdNum }).sort({ createdAt: -1 }).limit(10);
    await updateExpenses(groupIdNum);
    return NextResponse.json(expenses, {
      headers: {
        'Cache-Control': 'public, max-age=1800, s-maxage=1800',
      },
    });
  } catch (error) {
    console.error('Splitwise API Error:', error);
    return NextResponse.json(
      { error: 'Get Splitwise Expenses Error' },
      { status: 500 },
    );
  }
}

async function turnExpenseIntoMessage(expense: any) {
  const userDetails = expense.users.map((user: any) => {
    return `${user.user.first_name} ${user.user.last_name} (已付: ${user.paid_share} CAD, 应付: ${user.owed_share} CAD)`;
  }).join('\n');

  return `新支出: ${expense.description}
          金额: ${expense.cost} ${expense.currency_code}
          详情: ${userDetails}
          查看详情: https://live-split-board.hermanyiqunliang.com/`;
}

async function updateExpenses(groupId: number) {
  const response = await fetch(`https://secure.splitwise.com/api/v3.0/get_expenses?group_id=${groupId}&limit=10`, {
    headers: {
      'Authorization': `Bearer ${process.env.SPLITWISE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Splitwise API Error: ${response.status}`);
  }

  const data = await response.json();
  const expenses = data.expenses;
  const messages = [];
  for (const expense of expenses) {
    // check if expense already exists
    const existingExpense = await Expense.findOne({ id: expense.id });
    if (existingExpense) {
      continue;
    }
    // if not exists, add to messages
    messages.push(turnExpenseIntoMessage(expense));
    // create new expense
    const newExpense = new Expense(expense);
    await newExpense.save();
  }
  // send message to discord
  // console.log(messages);
  // await sendMessage(messages.join('\n'));
}
