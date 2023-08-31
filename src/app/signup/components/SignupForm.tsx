// 'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Link } from '@chakra-ui/react';

export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onSubmit: (data: SignupFormData) => void;
  apiError: string | null;
}

const SignupForm: React.FC<Props> = ({ onSubmit, apiError }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupFormData>();
  const password = watch('password');

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
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: 'Password must contain at least one lower character, one upper character, one digit, and one special character',
            },
          })}
        />
        {errors.password && <Text color="red.500">{errors.password.message?.toString()}</Text>}
      </FormControl>

      <FormControl id="confirmPassword" isInvalid={!!errors.confirmPassword}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: value => value === password || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && <Text color="red.500">{errors.confirmPassword.message?.toString()}</Text>}
      </FormControl>

      <Button width="100%" mt={4} type="submit">
        Sign Up
      </Button>

    </VStack>
  );
};

export default SignupForm;
