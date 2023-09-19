import http from '../http';

const verifyToken = async (token: string) => {
  try {
    await http.get('/api/token/verify', {
      headers: {
        authorization: token,
      },
    });

    return true;
  } catch (err: any) {
    console.warn(err);
    throw new Error(JSON.stringify(err));
  }
};

export default verifyToken;
