import React from 'react'
import populares from './populares.json'
import styles from './Populares.module.scss'


export default function Populares() {
  return (

    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {populares.map(fotoPopular => {
          return (
            <li key={fotoPopular.id}>
              <img src={fotoPopular.path} alt={fotoPopular.alt} />
            </li>
          )
        })}
      </ul>
      <button>ver mais fotos</button>
    </aside>
  )
}
