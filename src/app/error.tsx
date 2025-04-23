'use client';

import ErrorComponent from '@/components/common/error-component';

export default function Error(props: ErrorProps) {
  return (
    <html>
      <body>
        <ErrorComponent {...props} />
      </body>
    </html>
  );
}
