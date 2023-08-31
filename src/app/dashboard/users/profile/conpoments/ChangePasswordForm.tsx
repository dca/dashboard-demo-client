'use client'

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react';

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

export const ChangePasswordForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, watch, control, formState } = useForm<FormData>();
  const { errors } = formState;
  const newPassword = watch('newPassword');

  return (
    <Box width="400px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="currentPassword" mb={4} isInvalid={!!errors.currentPassword}>
          <FormLabel>Current Password</FormLabel>
          <Controller
            name="currentPassword"
            control={control}
            rules={{ required: 'Current password is required' }}
            defaultValue=""
            render={({ field }) => <Input {...field} type="password" placeholder="Enter current password" />}
          />
          <FormErrorMessage>{errors.currentPassword?.message}</FormErrorMessage>
        </FormControl>

        <FormControl id="newPassword" mb={4} isInvalid={!!errors.newPassword}>
          <FormLabel>New Password</FormLabel>
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: 'New password is required',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: 'Password must contain at least one lower character, one upper character, one digit, and one special character',
              },
            }}
            defaultValue=""
            render={({ field }) => <Input {...field} type="password" placeholder="Enter new password" />}
          />
          <FormErrorMessage>{errors.newPassword?.message}</FormErrorMessage>
        </FormControl>

        <FormControl id="confirmPassword" mb={4} isInvalid={!!errors.confirmPassword}>
          <FormLabel>Confirm New Password</FormLabel>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              validate: value => value === newPassword || 'Passwords do not match',
            }}
            defaultValue=""
            render={({ field }) => <Input {...field} type="password" placeholder="Confirm new password" />}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>

        <Button colorScheme="teal" type="submit">Change Password</Button>
      </form>
    </Box>
  );
};
