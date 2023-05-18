import React from 'react';
import home from '../../assets/icones/home-ativo.png';
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png';
import maisVistas from '../../assets/icones/mais-vistas-inativo.png';
import novas from '../../assets/icones/novas-inativo.png';
import surpeendaMe from '../../assets/icones/surpreenda-me-inativo.png';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    
    <nav className={styles.menu} >
        <ul className={styles.menu__lista} >
            <li className={styles.menu__item} >
                <img src={home} alt="" />
                <a href="/">Início</a>
            </li>
            <li className={styles.menu__item} >
                <img src={maisCurtidas} alt="" />
                <a href="/">Mais Curtidas</a>
            </li>
            <li className={styles.menu__item} >
                <img src={maisVistas} alt="" />
                <a href="/">Mais Vistas</a>
            </li>
            <li className={styles.menu_item_} >
                <img src={novas} alt="" />
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item} >
                <img src={surpeendaMe} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
