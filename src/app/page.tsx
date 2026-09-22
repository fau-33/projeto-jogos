"use client";

import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import ItemJogos from "./components/ItemJogos";
import { jogosExclusivos, Jogo } from "../../dados/banco";

export default function Home() {
  const [textoBusca, setTextoBusca] = useState<string>("");

  // Filtra os jogos com base no texto de busca
  const jogosFiltrados = jogosExclusivos.filter((jogo: Jogo) =>
    jogo.nome.toLowerCase().includes(textoBusca.toLowerCase())
  );

  return (
    <div className={estilos.container_principal}>
      <h2>Lista de Jogos Exclusivos</h2>

      <div className={estilos.container_input}>
        <Image src="/lupa.png" alt="Ícone de busca" width={20} height={20} />
        <input
          type="text"
          placeholder="Pesquisar por um jogo..."
          value={textoBusca}
          onChange={(e) => setTextoBusca(e.target.value)}
        />
      </div>

      <div className={estilos.container_cards}>
        {jogosFiltrados.length > 0 ? (
          jogosFiltrados.map((jogo: Jogo) => (
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
