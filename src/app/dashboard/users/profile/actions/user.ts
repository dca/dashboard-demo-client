export const fetchUserInfo = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user`);
  if (!response.ok) throw new Error('Failed to fetch user info');
  return response.json();
};

export const changeUserPassword = async (userId: number, data: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to change password');
  return response.json();
};

export const getUserById = async (userId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Failed to get user');
  return response.json();
};
