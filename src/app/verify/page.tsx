'use client'

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function CallbackPage() {
  const router = useRouter();
  const { query } = router;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCode = async () => {
      if (query.code) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/auth0/callback`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: query.code }),
          });

          if (response.ok) {
            // 驗證成功，重定向到登入頁面
            router.push('/login');
          } else {
            const data = await response.json();
            setError(data.message || 'Verification failed');
          }
        } catch (err: any) {
          setError(err.message || 'An error occurred');
        } finally {
          setLoading(false);
        }
      }
    };

    verifyCode();
  }, [query]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
