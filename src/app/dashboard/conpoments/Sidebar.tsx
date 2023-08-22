'use client'

import React from 'react';
import { Box, VStack, Link, Heading, Flex, Icon } from '@chakra-ui/react';
import { FaUser, FaTable } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <Box bg="gray.800" width="250px" p={5} color="white">
      <VStack align="start" spacing={8} width="100%">
        <Heading size="lg">Menu</Heading>
        <Link 
          href="/dashboard/users/profile" 
          color="gray.300" 
          _hover={{ bg: "teal.500", color: "white" }} 
          p={2} 
          borderRadius="md"
          width="100%" 
          display="block"
        >
          <Flex align="center" width="100%" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Icon as={FaUser} mr={2} />
              個人資訊
            </Box>
          </Flex>
        </Link>
        <Link 
          href="/dashboard" 
          color="gray.300" 
          _hover={{ bg: "teal.500", color: "white" }} 
          p={2} 
          borderRadius="md"
          width="100%" 
          display="block"
        >
          <Flex align="center" width="100%" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Icon as={FaTable} mr={2} />
              Dashboard
            </Box>
          </Flex>
        </Link>
        {/* Add more links as needed */}
      </VStack>
    </Box>
  );
}

export default Sidebar;
