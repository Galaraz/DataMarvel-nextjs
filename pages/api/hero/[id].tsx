import { NextApiRequest, NextApiResponse } from 'next';
import md5 from 'md5';

const publicKey = process.env.NEXT_PUBLIC_public_key;
const privateKey = process.env.NEXT_PUBLIC_private_key;

function generateHash(ts: string): string {
  const hash = md5(ts + privateKey + publicKey);
  return hash;
}

export default async function heroId(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const ts = new Date().getTime().toString();
  const hash = generateHash(ts);
  const characterId = req.query.id as string;
  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${publicKey}&hash=${hash}&ts=${ts}`;

  console.log(characterId);
  try {
    const response = await fetch(url);
    const data = await response.json();
    const heroData = data.data.results[0];
    const hero = {
      id: heroData.id,
      name: heroData.name,
      description: heroData.description,
      thumbnail: {
        path: heroData.thumbnail.path,
        extension: heroData.thumbnail.extension,
      },
      comics: heroData.comics.results,
      series: heroData.series.results,
      stories: heroData.stories.results,
      events: heroData.events.results,
    };
    res.status(200).json({ hero });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
