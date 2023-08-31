'use client'

import React from 'react';
import { Box, Text, VStack, Spinner, Icon } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';

export default function Page() {
  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center" bg="gray.100">
      <VStack spacing={4} padding={6} boxShadow="lg" borderRadius="md" bg="white">
        <Icon as={AiOutlineMail} boxSize={10} />
        <Text fontSize="xl" color="gray.700">Waiting for Verification</Text>
        <Text color="gray.500">Please check your email for a verification link.</Text>
      </VStack>
    </Box>
  );
};
