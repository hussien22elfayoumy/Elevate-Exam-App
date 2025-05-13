interface APIRequset extends RequestInit {
  endpoint: string;
}

export async function apiRequest<T>({ endpoint, ...params }: APIRequset) {
  try {
    const res = await fetch(`${process.env.API}/${endpoint}`, params);

    const data: APIResponse<T> = await res.json();

    if (!res.ok || 'code' in data) {
      throw new Error(data.message || 'Something went wrong, try again later');
    }

    return { payload: data, error: null };
  } catch (err) {
    return { payload: null, error: err as Error };
  }
}
