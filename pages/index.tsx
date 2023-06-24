import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

interface Hero {
  id: number;
  title: string;
  image: string;
}

interface BuscaProps {
  list: Hero[];
}

export default function Busca({ list }: BuscaProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [heroList, setHeroList] = useState<Hero[]>([]);

  const Button = styled.button`
  padding: 8px 16px;
  background-color: #ff0000;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
  `;

const handlerSearch = async () => { 
  if (searchText !== '') {
    const result = await fetch(`/api/search?q=${searchText}`);
    const json = await result.json();
    const results = json.data.results;

    const heroItems: Hero[] = results.map((item: any) => ({
      id: item.id,
      title: item.name,
      image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
    }));
    setHeroList(heroItems);
  }
};

  return (
    <div className={styles.container}> 
      <Head>
        <title>Data Marvel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Busca
        </h1>

        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} />
        <br></br>    
        <Button onClick={handlerSearch}>Buscar</Button>


       
   
        <ul>
        {heroList.map((item) => (
          <li key={item.id}>
            <a href={`/hero/${item.id}`}>
              <img src={item.image} width="150" /><br/>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      
   
      </main>
   
    </div>
  )
}

 