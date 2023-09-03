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
    console.log(err);
    throw new Error(JSON.stringify(err));
  }
};

export default verifyToken;
