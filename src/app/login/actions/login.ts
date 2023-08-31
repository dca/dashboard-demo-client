// api/auth.ts

export const login = async (email: string, password: string) => {
    const response = await fetch('api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Login failed');
    }
  
    return response.json();
  };
  