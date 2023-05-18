import React from 'react'
import Tags from '../Tags'
import fotos from './fotos.json'
import favorito from './favorito.png'
import open from './open.png'
import styles from './Galeria.module.scss'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.galeria__cards}>
        {
          fotos.map(foto => {
            return (
              <li key={foto.id} className={styles.galeria__card}>
                <img className={styles.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
                <p className={styles.galeria__descricao}>{foto.titulo}</p>

                <div>
                  <p>{foto.creditos}</p>
                  <span>
                    <img src={favorito} alt="ícone coração de curtir" />
                    <img src={open} alt="ícone abrir modal" />
                  </span>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
