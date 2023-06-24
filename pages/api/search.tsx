import md5 from 'md5';
import { NextApiRequest, NextApiResponse } from 'next';

const publicKey = process.env.NEXT_PUBLIC_public_key;
const privateKey = process.env.NEXT_PUBLIC_private_key;

function generateHash(ts: string): string {
  const hash = md5(ts + privateKey + publicKey);
  return hash;
}

export default async function search(req: NextApiRequest, res: NextApiResponse) {
  const ts = new Date().getTime().toString();
  const hash = generateHash(ts);

  const { q } = req.query;

  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${q}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data.results);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}