"use client";

import { useState } from "react";
import estilos from "./page.module.css";
import ItemJogos from "./components/ItemJogos";
import { jogosExclusivos, Jogo } from "../../dados/banco";

export default function Home() {
  const [listaJogos, setListaJogos] = useState<Jogo[]>(jogosExclusivos);

  const handleFiltrarJogoPlataforma = (
    plataforma: "xbox" | "playstation" | "nintendo"
  ) => {
    const jogosFiltrados = jogosExclusivos.filter(
      (jogo: Jogo) => jogo.plataforma === plataforma
    );
    setListaJogos(jogosFiltrados);
  };

  const handleLimparFiltro = () => {
    setListaJogos(jogosExclusivos);
  };

  return (
    <div className={estilos.container_principal}>
      <h2>Lista de Jogos Exclusivos</h2>

      {/* Bloco de Botões de Filtro */}
      <div className={estilos.container_btns}>
        <button onClick={() => handleFiltrarJogoPlataforma("xbox")}>
          XBOX
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("playstation")}>
          PlayStation
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("nintendo")}>
          Nintendo
        </button>
        <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
      </div>

      {/* Bloco de Exibição dos Cards */}
      <div className={estilos.container_cards}>
        {listaJogos.map((jogo: Jogo) => (
          <ItemJogos
            key={jogo.id}
            nome={jogo.nome}
            plataforma={jogo.plataforma}
          />
        ))}
      </div>
    </div>
  );
}
