import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({ tags, aoMudarTag }) {

  const mudaTag = (novaTag) => {
    aoMudarTag(novaTag);
  }
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => {
          return <li key={tag} onClick={() => mudaTag(tag)}>{tag}</li>
        })}
        <li onClick={() => mudaTag()}>Todas</li>
      </ul>
    </div>
  )
}
