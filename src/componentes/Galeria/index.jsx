import React from 'react'
import Tags from '../Tags'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
import Cards from './Cards'
import { useState } from 'react'

export default function Galeria() {

  const [fotosMostradas, setFotosMostradas] = useState(fotos);
  const tags = [...new Set(fotos.map(valor => valor.tag))];

  const filtraFotosPorTag = (tag) => {
    tag ? setFotosMostradas(fotos.filter(foto => foto.tag === tag)) : setFotosMostradas(fotos);
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} aoMudarTag={filtraFotosPorTag}/>
      <Cards fotos={fotosMostradas} styles={styles}/>
    </section>
  )
}
