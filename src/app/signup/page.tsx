'use client'

import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { createUser } from './actions/user';
import SignupForm, { SignupFormData } from './components/SignupForm';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (data: SignupFormData) => {
    try {
      const responseData = await createUser({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      router.push('/wait-for-verification');

    } catch (error: unknown) {
      setApiError((error as Error).message ?? 'Signup failed');
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.200"
    >
      <SignupForm onSubmit={handleSignup} apiError={apiError} />
    </Box>
  );
}
