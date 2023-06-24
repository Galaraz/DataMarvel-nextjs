import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { urlSite } from '../../lib/marvelUtils';
import styles from '../../styles/Home.module.css';

interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface HeroItemProps {
  info: Hero;
}

export default function HeroItem({ info }: HeroItemProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Marvel - Resultado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{info.name}</h1>
        <p>{info.description}</p>
        <img src={`${info.thumbnail.path}.${info.thumbnail.extension}`} width="400" />
        <Link href="/">Voltar</Link>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const heroId = context.params?.id;
  
  if (!heroId) {
    return {
      notFound: true,
    };
  }

  const result = await fetch(`${urlSite}/api/hero/${heroId}`);
  const json = await result.json();
  console.log(json);

  return {
    props: {
      info: json.hero,
    },
  };
};