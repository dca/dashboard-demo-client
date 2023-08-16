'use client'

import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { login } from './actions/login';
import LoginForm, { LoginFormData } from './components/LoginForm';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();
  
  const handleLogin = async (data: LoginFormData) => {
    try {
      const responseData = await login(data.email, data.password);
      localStorage.setItem('access_token', responseData.access_token);
      setApiError(null);

      router.push('/dashboard');

    } catch (error: unknown) {
      localStorage.setItem('access_token', '');
      setApiError((error as Error).message ?? 'Login failed');
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
      <LoginForm onSubmit={handleLogin} apiError={apiError} />
    </Box>
  );
}
