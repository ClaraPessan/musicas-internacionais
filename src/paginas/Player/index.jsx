import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Titulo from "../../componentes/Titulo";
import styles from "./Player.module.scss";

export default function Player() {
  const [video, setVideo] = useState(null);
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/ClaraPessan/musicas-api/videos?id=${parametros.id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      })
      .catch((error) => {
        console.error("Erro ao carregar o vídeo:", error);
      });
  }, [parametros.id]);

  if (!video) {
    return null;
  }

  return (
    <>
      <Titulo>PLAYER</Titulo>
      <section className={styles.container}>
        <Titulo>Clique na imagem para acessar o youtube:</Titulo>
        <a href={video.link} target="_blank" rel="noopener noreferrer" className={styles.capa}>
          <img src={video.capa} alt={video.titulo}/>
        </a>
      </section>
    </>
  );
}
