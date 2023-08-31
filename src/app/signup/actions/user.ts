export const createUser = async (data: any) => {
  const response = await fetch(`/api/v1/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to signup');
  return response.json();
};
