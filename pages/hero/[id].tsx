import Head from 'next/head';
import Link from 'next/link';
import { Hero } from '../../types';
import { urlSite } from '../../lib/marvelUtils';
import styles from '../../styles/Home.module.css';

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

export async function getServerSideProps(context: any) {
  const result = await fetch(`${urlSite}/api/hero/${context.params.id}`);
  const json = await result.json();
  console.log(json);
  return {
    props: {
      info: json.hero,
    },
  };
}