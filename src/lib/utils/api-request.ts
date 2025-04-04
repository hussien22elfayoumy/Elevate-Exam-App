import { JSON_HEADER } from '../constants/api.constant';

export async function apiRequest<T>({
  endpoint,
  method,
  body,
  headers,
}: APIRequestOptions) {
  try {
    const res = await fetch(`${process.env.API}/${endpoint}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        ...JSON_HEADER,
        ...headers,
      },
    });

    const data: APIResponse<T> = await res.json();

    if (!res.ok || 'code' in data) {
      throw new Error(data.message || 'Something went wrong, try again later');
    }

    return data;
  } catch (err) {
    console.log((err as Error).message);
    throw err;
  }
}
