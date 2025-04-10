'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 text-red-500">
      <h2 className="text-lg font-semibold">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        className="mt-4 rounded bg-brand px-4 py-2 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
