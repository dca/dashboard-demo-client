'use client'

import React, { useEffect, useState } from 'react';
import { Box, Divider, Stat, StatGroup, StatLabel, StatNumber, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { User, getUsers } from './actions/get-users';
import { Statistics, getStatistics } from './actions/get-statistics';



export default function Page() {

  const [users, setUsers] = useState<User[]>([]);
  const [statistics, setStatistics] = useState<Statistics>({ today: 0, averageLast7Days: 0} as Statistics);
  
  useEffect(() => { 
    (async () => {
      const response: any = await getUsers() 
      setUsers(response?.data?.list ?? []);
    })();
    
    (async () => {
      const response: any = await getStatistics() 
      setStatistics(response.data);
    })();
  }, []);

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
          <StatNumber>{statistics.today}</StatNumber> {/* Replace with actual data */}
        </Stat>
        <Divider orientation="vertical" height="20px" />
        <Stat>
          <StatLabel>Avg Active Sessions (Last 7 days)</StatLabel>
          <StatNumber>{statistics.averageLast7Days}</StatNumber> {/* Replace with actual data */}
        </Stat>
      </StatGroup>

      {/* User Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Email</Th>
            <Th>Signup Time</Th>
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
              <Td>{user.createdAt}</Td>
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
