import md5 from 'md5';

const publicKey  = process.env.NEXT_PUBLIC_public_key;
const privateKey = process.env.NEXT_PUBLIC_private_key;

function generateHash(ts) {
  const hash = md5(ts + privateKey + publicKey);
  return hash;
}

export default async function fetchMarvelData(req, res) {
  const ts = new Date().getTime().toString();
  const hash = generateHash(ts);

  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}