// app/api/workers/route.ts
import { NextResponse } from 'next/server';
import workersData from '../../../data/workers.json'; // Adjust path

export async function GET() {
  try {
    return NextResponse.json(workersData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch workers' }, { status: 500 });
  }
}
