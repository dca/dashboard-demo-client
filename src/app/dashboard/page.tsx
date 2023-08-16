'use client'

import React from 'react';
import { Box, Divider, Stat, StatGroup, StatLabel, StatNumber, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

export default function Page() {

  const users = [
    { id: '1', email: 'user1@example.com', signupTimestamp: '2023-08-01 12:00', loginCount: 5, lastSession: '2023-08-10 14:00', method: 'local' },
    // ... add more users as needed
  ];

  return (
    <Box flex="1" p={5}>
      <Text fontSize="2xl" color="gray.700" mb={5}>User Database Dashboard</Text>

      {/* User Statistics */}
      <StatGroup mb={5} >
        <Stat>
          <StatLabel>Total Users</StatLabel>
          <StatNumber>{users.length}</StatNumber>
        </Stat>
        <Divider orientation="vertical" height="20px" />
        <Stat>
          <StatLabel>Active Sessions Today</StatLabel>
          <StatNumber>10</StatNumber> {/* Replace with actual data */}
        </Stat>
        <Divider orientation="vertical" height="20px" />
        <Stat>
          <StatLabel>Avg Active Sessions (Last 7 days)</StatLabel>
          <StatNumber>8</StatNumber> {/* Replace with actual data */}
        </Stat>
      </StatGroup>

      {/* User Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Email</Th>
            <Th>Signup Timestamp</Th>
            <Th>Number of Logins</Th>
            <Th>Last Session</Th>
            <Th>Login Method</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.email}</Td>
              <Td>{user.signupTimestamp}</Td>
              <Td>{user.loginCount}</Td>
              <Td>{user.lastSession}</Td>
              <Td>{user.method}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
