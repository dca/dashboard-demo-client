'use client'


const JWT_KEYNAME = 'access_token';

export const saveToken = async (token: string) => {
  localStorage.setItem(JWT_KEYNAME, token);
  return
};

export const loadToken = async () => {
  return localStorage.getItem(JWT_KEYNAME)
};

export const removeToken = async () => {
  localStorage.removeItem(JWT_KEYNAME);
  return
}

export const getUserId = async () => {
  const token = await loadToken();
  if (!token) return null;

  const { sub } = parseJwt(token);
  return sub;
};

const parseJwt = (token: string) => {
  try {
      const base64Url = token.split('.')[1];
      
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      
      const decodedValue = atob(base64);
      
      return JSON.parse(decodedValue);
  } catch (e) {
      console.error("Failed to decode JWT:", e);
      throw new Error('Failed to decode JWT');
  }
}  


