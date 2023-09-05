//

export type User = {
  id: string;
  email: string;
  createdAt: string;
  loginCount: number;
  lastSession: string;
  method: string;
};

export const getUsers = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'failed');
    }
  
    return response.json();
  };
  