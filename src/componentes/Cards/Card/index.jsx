import { Link } from 'react-router-dom';
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { useFavoritoContext } from '../../../contextos/Favoritos';

export default function Card({ id, titulo, capa, cantor, styles}){
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <section className={styles.cards}>
            <div className={styles.card}>
                <Link className={styles.card__musica} to={`/${id}`}>
                    <img src={capa} alt={titulo} className={styles.card__capa}/>
                    <div className={styles.card__informacoes}>
                        <h3 className={styles.card__titulo}>{titulo}</h3>
                        <p className={styles.card__cantor}>{cantor}</p>
                    </div>
                </Link>
                
                <img src={icone}
                    className={styles.card__icone}
                    alt='Favoritar música'
                    onClick={() => {
                        console.log(adicionarFavorito({ id, titulo, capa, cantor}))
                        adicionarFavorito({ id, titulo, capa, cantor})
                }} />
            </div>
        </section>
    )
}