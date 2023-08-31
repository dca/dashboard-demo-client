'use client'

import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, Flex } from '@chakra-ui/react';
import { ChangePasswordForm } from './conpoments/ChangePasswordForm';
import { changeUserPassword, fetchUserInfo } from './actions/user';

export default function UserProfile() {
  const [user, setUser] = useState({ username: '', email: '', method: '' });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const data = await fetchUserInfo();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    getUserInfo();
  }, []);

  const handlePasswordChange = async (data: any) => {
    try {
      const userId = 1
      await changeUserPassword(userId, data)
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error('Error:', error)
    }
  };

  return (
    <Flex width="100vw" height="100vh" justifyContent="center" alignItems="center" bg="gray.100" overflowY="auto">
      <Box maxWidth="500px" width="100%" bg="white" p={8} borderRadius="xl" boxShadow="lg" m={4}>
        <Text fontSize="2xl" color="gray.700" mb={5}>User Profile</Text>

        {/* User Information */}
        <VStack align="start" spacing={3} mb={5}>
          <Text><strong>Username:</strong> {user.username}</Text>
          <Text><strong>Email:</strong> {user.email}</Text>
          <Text><strong>Login Method:</strong> {user.method}</Text>
        </VStack>

        {/* Change Password Form */}
        <Box width="400px">
          <Text fontSize="xl" color="gray.700" mb={3}>Change Password</Text>
          <ChangePasswordForm onSubmit={handlePasswordChange} />
        </Box>
      </Box>
    </Flex>
  );
}
