import CabecalhoLink from '../CabecalhoLink';
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header>
            <nav className={styles.cabecalho}>
                <CabecalhoLink url="./" className={styles.cabecalho__link}>
                    <h2>Home</h2>
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos" className={styles.cabecalho__link}>
                    <h4>Favoritos</h4>
                </CabecalhoLink>
            </nav>
        </header>
    )
}