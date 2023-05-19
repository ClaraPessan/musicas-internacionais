import styles from './Titulo.module.scss'

export default function Titulo({children}) {
    return (
        <h2 className={styles.titulo}>
            {children}
        </h2>
    )
}