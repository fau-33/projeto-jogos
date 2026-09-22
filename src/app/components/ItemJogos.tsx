import Image from "next/image";
import estilos from "./ItemJogos.module.css";

interface ItemJogosProps {
  nome: string;
  plataforma: "xbox" | "playstation" | "nintendo";
}

export default function ItemJogos({ nome, plataforma }: ItemJogosProps) {
  const imagensPlataforma: Record<string, string> = {
    xbox: "/xbox.png",
    playstation: "/playstation.jpg",
    nintendo: "/nintendo.jpg",
  };

  return (
    <div className={estilos.card}>
      <figure>
        <Image
          src={imagensPlataforma[plataforma]}
          alt={`Logo ${plataforma}`}
          width={40}
          height={40}
          style={{ objectFit: "contain" }}
        />
      </figure>
      <div>
        <p>{nome}</p>
      </div>
    </div>
  );
}
