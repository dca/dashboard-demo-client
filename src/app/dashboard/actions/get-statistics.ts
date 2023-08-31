//

export type Statistics = {
  today: number
  averageLast7Days: number
};

export const getStatistics = async () => {
    const response = await fetch('https://serv3.dca.tw/api/v1/user/statistics', {
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
  