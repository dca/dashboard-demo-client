'use client'

import React from 'react';
import { Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    router.push('/login');
  };

  return (
    <Flex as="nav" bg="teal.500" color="white" p={4} align="center" shadow="md">
      <Heading size="md">My Dashboard</Heading>
      <Spacer />
      <Button onClick={handleLogout} bg="red.500" color="white" _hover={{ bg: "red.600" }} variant="solid">登出</Button>
    </Flex>
  );
}

export default Navbar;