import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import banner from '../../assets/banner.png';
import styles from './PaginaInicial.module.scss';
import Galeria from "componentes/Galeria";
import Rodape from "componentes/Rodape";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main className={styles.main}>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A Galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da Terra vista do espaço" />
                    </div>
                </section>

                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />

        </>
    );
}