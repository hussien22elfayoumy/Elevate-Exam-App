import { apiRequest } from '@/lib/utils/api-request';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token) throw new Error('Cant get access token');

    const body = await req.json();

    const data = await apiRequest<QuizResultResponse>({
      endpoint: 'questions/check',
      method: 'POST',
      body,
      headers: {
        token: token.accessToken,
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message, code: 500 });
  }
}
