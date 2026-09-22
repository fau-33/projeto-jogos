import Image from "next/image";
import estilos from "./page.module.css";
import Lupa from "../../public/lupa.png";
import ItemJogos from "./components/ItemJogos";
import { jogosExclusivos, Jogo } from "../../dados/banco";

export default function Home() {
  return (
    <div className={estilos.container_principal}>
      <h2>Lista de Jogos Exclusivos</h2>

      <div className={estilos.container_input}>
        <Image src={Lupa} alt="Ícone de busca" width={20} height={20} />
        <input type="text" placeholder="Pesquisar por um jogo" />
      </div>

      <div className={estilos.container_cards}>
        {jogosExclusivos.map((jogo: Jogo) => (
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
