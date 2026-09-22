"use client";

import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import ItemJogos from "./components/ItemJogos";
import { jogosExclusivos, Jogo } from "../../dados/banco";

export default function Home() {
  const [listaJogos, setListaJogos] = useState<Jogo[]>(jogosExclusivos);
  const [textoBusca, setTextoBusca] = useState<string>("");

  // 1. Filtra por plataforma e limpa o input de busca
  const handleFiltrarJogoPlataforma = (
    plataforma: "xbox" | "playstation" | "nintendo"
  ) => {
    const jogosFiltrados = jogosExclusivos.filter(
      (jogo: Jogo) => jogo.plataforma === plataforma
    );
    setListaJogos(jogosFiltrados);
    setTextoBusca("");
  };

  // 2. Restaura a lista original e limpa o input de busca
  const handleLimparFiltro = () => {
    setListaJogos(jogosExclusivos);
    setTextoBusca("");
  };

  // 3. Filtra dinamicamente por texto (nome ou plataforma)
  const handleBuscarJogo = (textoDigitado: string) => {
    setTextoBusca(textoDigitado);

    const jogosFiltrados = jogosExclusivos.filter(
      (jogo: Jogo) =>
        jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
    );

    setListaJogos(jogosFiltrados);
  };

  return (
    <div className={estilos.container_principal}>
      <h2>Lista de Jogos Exclusivos</h2>

      {/* 1. Botões de Filtro */}
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

      {/* 2. Barra de Pesquisa com a Lupa */}
      <div className={estilos.container_input}>
        <Image src="/lupa.png" alt="Ícone de busca" width={20} height={20} />
        <input
          type="text"
          value={textoBusca}
          onChange={(event) => handleBuscarJogo(event.target.value)}
          placeholder="Pesquise um jogo ou plataforma"
        />
      </div>

      {/* 3. Lista de Cards Renderizada */}
      <div className={estilos.container_cards}>
        {listaJogos.length > 0 ? (
          listaJogos.map((jogo: Jogo) => (
            <ItemJogos
              key={jogo.id}
              nome={jogo.nome}
              plataforma={jogo.plataforma}
            />
          ))
        ) : (
          <p style={{ color: "#777", marginTop: "20px" }}>
            Nenhum jogo encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
