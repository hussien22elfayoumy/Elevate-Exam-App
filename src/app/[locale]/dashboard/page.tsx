import { Suspense } from 'react';
import Subjects from './_components/subjects';

export default function Home() {
  return (
    <>
      <Suspense fallback={<h2>Loading subjects</h2>}>
        <Subjects />
      </Suspense>
    </>
  );
}
