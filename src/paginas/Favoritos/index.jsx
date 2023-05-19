import styles from './Favoritos.module.scss'
import Titulo from '../../componentes/Titulo';
import Card from '../../componentes/Cards/Card';
import { useFavoritoContext } from '../../contextos/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    console.log(favorito)
    return (
        <>
            <Titulo>MEUS FAVORITOS</Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;