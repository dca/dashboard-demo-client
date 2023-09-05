'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export interface LoginFormData {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: LoginFormData) => void;
  apiError: string | null;
}

const LoginForm: React.FC<Props> = ({ onSubmit, apiError }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const router = useRouter();

  const loginWithAuth0 = async (targetUrl?: string) => {
    try {

      const domain = 'dev-gxk74uonng6ksizv.us.auth0.com'
      const clientId = 'ud7oMkiSdtnMQpyrzGLVbmYFNtaIABCy'
      const callbackUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/callback`
      const authUrl = `https://${domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(callbackUrl)}&scope=openid%20profile%20email`

      router.push(authUrl)
    } catch (err) {
      console.log("Log in failed", err);
    }
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} padding={6} boxShadow="lg" borderRadius="md" bg="white">
      
    {apiError && <Text color="red.500">{apiError}</Text>}

    <FormControl id="email" isInvalid={!!errors.email}>
      <FormLabel>Email address</FormLabel>
      <Input
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <Text color="red.500">{errors.email.message?.toString()}</Text>}
    </FormControl>
      <FormControl id="password" isInvalid={!!errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required"
          })}
        />
        {errors.password && <Text color="red.500">{errors.password.message?.toString()}</Text>}
      </FormControl>
      <Button width="100%" mt={4} type="submit">
        Login
      </Button>

      <Button width="100%" mt={4} onMouseDown={(event) => loginWithAuth0()}>
        Login With Auth0
      </Button>

      <Link href="/signup">Signup</Link>
    </VStack>
  );
};

export default LoginForm;
