'use client'

import React from 'react';
import { Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('access_token');

    const domain = 'dev-gxk74uonng6ksizv.us.auth0.com'
    const clientId = 'ud7oMkiSdtnMQpyrzGLVbmYFNtaIABCy'
    const redirectUri = `${process.env.NEXT_PUBLIC_WEB_URL}/login`
    const authUrl = `https://${domain}/v2/logout?returnTo=${encodeURIComponent(redirectUri)}&client_id=${clientId}`
    router.push(authUrl);

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