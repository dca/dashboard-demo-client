'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function CallbackPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const uid = searchParams.get('uid')

  useEffect(() => {
    const verifyCode = async () => {
      if (code) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/verification`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, uid: Number.parseInt(uid ?? '') }),
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
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
