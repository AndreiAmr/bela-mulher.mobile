import http from '../http';

const getProfile = async (token: string) => {
  try {
    const { data } = await http.get('/api/professional/profile', {
      headers: {
        authorization: token,
      },
    });

    return data;
  } catch (err: any) {
    console.warn(err);
    throw new Error(JSON.stringify(err));
  }
};

export default getProfile;
