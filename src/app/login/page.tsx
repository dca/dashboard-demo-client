'use client'

import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { login } from './actions/login';
import LoginForm, { LoginFormData } from './components/LoginForm';
import { useRouter } from 'next/navigation';
import { removeToken, saveToken } from '@/conponents/utils/JwtManage';

export default function Page() {
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (data: LoginFormData) => {
    try {
      const responseData = await login(data.email, data.password);
      saveToken(responseData.access_token);
      setApiError(null);

      router.push('/dashboard');

    } catch (error: unknown) {
      removeToken()
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
