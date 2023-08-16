'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from '@chakra-ui/react';

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
    </VStack>
  );
};

export default LoginForm;
