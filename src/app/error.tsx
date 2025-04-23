'use client';

import ErrorComponent from '@/components/common/error-component';
import { Button } from '@/components/ui/button';

export default function Error(props: ErrorProps) {
  return (
    <html>
      <body>
        <ErrorComponent {...props} />
      </body>
    </html>
  );
}
