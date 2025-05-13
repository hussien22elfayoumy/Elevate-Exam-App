interface APIRequset extends RequestInit {
  endpoint: string;
}

export async function apiRequest<T>({
  endpoint,
  ...params
}: APIRequset): Promise<
  | { success: true; data: SuccessfullResponse<T> }
  | { success: false; error: string }
> {
  try {
    const res = await fetch(`${process.env.API}/${endpoint}`, params);

    const data: APIResponse<T> = await res.json();

    if (!res.ok || 'code' in data) {
      throw new Error(data.message || 'Something went wrong, try again later');
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
