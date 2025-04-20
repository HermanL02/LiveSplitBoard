import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`https://secure.splitwise.com/api/v3.0/get_groups`, {
      headers: {
        'Authorization': `Bearer ${process.env.SPLITWISE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Splitwise API Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, max-age=1800, s-maxage=1800',
      },
    });
  } catch (error) {
    console.error('Splitwise API Error:', error);
    return NextResponse.json(
      { error: 'Get Splitwise Data Error' },
      { status: 500 },
    );
  }
}
