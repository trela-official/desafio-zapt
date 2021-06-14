import md5 from 'md5';
import api from '../services/axios';

type ApiDataProps = {
  endpoint: string;
  nameStartsWith?: string;
};

export default async function getApiData<Response>({
  endpoint,
  nameStartsWith = '',
}: ApiDataProps): Promise<Response> {
  const ts = new Date().getTime();
  const hash = md5(
    `${ts}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`
  );
  const response = await api.get(endpoint, {
    params: {
      ts,
      apikey: process.env.REACT_APP_PUBLIC_KEY,
      hash,
      nameStartsWith: nameStartsWith ?? '',
    },
  });
  return response.data.data;
}
