 import md5 from 'md5';

const publicKey = '152afcb329c7159c72b19f0fd2b9d771';
const privateKey = '7ee417ef048c13d2322e4e0dec402f736161464e';

function generateHash(ts) {
  const hash = md5(ts + privateKey + publicKey);
  return hash;
}

export default async function search(req, res) {
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