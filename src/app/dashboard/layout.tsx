'use client'

import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from './conpoments/Navbar';
import Sidebar from './conpoments/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flex direction="column" height="100vh">
      <Navbar />
      <Flex flex="1" bg="gray.100">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  )
}