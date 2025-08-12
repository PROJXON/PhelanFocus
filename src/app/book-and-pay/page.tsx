'use client';
import { Suspense } from 'react';
import BookAndPayPage from './BookAndPayPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookAndPayPage />
    </Suspense>
  );
}
