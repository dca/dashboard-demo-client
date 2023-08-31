'use client'
// 'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Box, Text, VStack, Spinner } from '@chakra-ui/react';
import { set } from 'react-hook-form';

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const uid = Number.parseInt(searchParams.get('uid') ?? '')
      const code = searchParams.get('code')

      if (!code) {
        setError('Verification code is missing.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('https://serv3.dca.tw/api/v1/user/verification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid, code }),
        });

        if (response.ok) {
          setTimeout(() => { router.push('/login') }, 3000);
        } else {
          const data = await response.json();
          setError(data.message || 'Verification failed.');
        }
      } catch (err) {
        setError('An error occurred while verifying the user.');
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [useSearchParams()]);

  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center" bg="gray.100">
      <VStack spacing={4} padding={6} boxShadow="lg" borderRadius="md" bg="white">
        {isLoading ? (
          <Spinner size="xl" color="blue.500" />
        ) : (
          error ? (
            <Text fontSize="xl" color="red.500">{error}</Text>
          ) : (
            <Text fontSize="xl" color="green.500">Verification successful. Redirecting...</Text>
          )
        )}
      </VStack>
    </Box>
  );
}
