import Head from 'next/head';
import Link from 'next/link';
import { urlSite } from "../../lib/marvelUtils";
import styles from '../../styles/Home.module.css';

export default function HeroItem({ info }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
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

export async function getServerSideProps(context) {
  const result = await fetch(`${urlSite}/api/hero/${context.params.id}`);
  const json = await result.json();
  console.log(json)
  return {
    props: {
      info: json.hero,
    },
  };
}
