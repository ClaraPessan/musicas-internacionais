import { useEffect, useState } from "react";
import styles from './Cards.module.scss'
import Card from "./Card";
import Titulo from '../Titulo'
import FavoritosProvider from "../../contextos/Favoritos";

export default function Cards() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ClaraPessan/musicas-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])
    
    return (
        <FavoritosProvider>
            <>
                <Titulo>ESCOLHA A SUA FAVORITA E DIVIRTA-SE!</Titulo>
                <section className={styles.container}>
                    {videos.map((video) => {
                        return <Card {...video} key={video.id} styles={styles} />
                    })}
                </section>
            </>
        </FavoritosProvider>
    );
}