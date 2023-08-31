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
    const response = await fetch('https://serv3.dca.tw/api/v1/user', {
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
  