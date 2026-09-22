# 🎮 E-Games Catalog | Next.js & TypeScript

Uma aplicação web moderna, responsiva e fortemente tipada desenvolvida para catalogar e filtrar jogos exclusivos por plataforma e pesquisa em tempo real.

🔗 **Live Demo:** [https://projeto-jogos-eta.vercel.app/](https://projeto-jogos-eta.vercel.app/)  
📂 **Repositório:** [https://github.com/fau-33/projeto-jogos](https://github.com/fau-33/projeto-jogos)

---

## 📌 Sobre o Projeto

O **E-Games Catalog** foi desenvolvido com o objetivo de demonstrar o domínio de conceitos fundamentais do **React** e **Next.js**, como manipulação de estado, renderização condicional, filtragem dinâmica de arrays e modularização com **TypeScript**.

### 💡 Destaques da Aplicação

- **Filtro em Tempo Real:** Busca dinâmica por nome do jogo ou nome da plataforma com validação ignorando maiúsculas/minúsculas.
- **Filtros por Categoria:** Seleção rápida por plataformas (_Xbox, PlayStation, Nintendo_) com reset automático do campo de busca.
- **Sincronização de Estado:** Controle preciso de inputs através de _Controlled Components_ com `useState`.
- **Componentização Reutilizável:** Estrutura modular limpa e desacoplada utilizando CSS Modules.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js 14+](https://nextjs.org/)** (App Router & Client Components)
- **[React](https://react.dev/)** (Hooks como `useState`)
- **[TypeScript](https://www.typescriptlang.org/)** (Interfaces, Union Types e Mapeamento Estático)
- **CSS Modules** (Escopamento local de estilos)
- **Vercel** (Deploy e Integração Contínua)

---

## 🏗️ Arquitetura e Estrutura de Pastas

```text
projeto-jogos/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ItemJogos.tsx           # Componente individual de card do jogo
│   │   │   └── ItemJogos.module.css    # Estilização escopada do card
│   │   ├── page.tsx                    # Página principal e gerenciamento de estado
│   │   └── page.module.css             # Estilização do layout da página
│   └── dados/
│       └── banco.ts                    # Mapeamento de dados e Interfaces TypeScript
└── public/                             # Recursos estáticos (Logos e ícones)
```

```text
    🧠 Conceitos e Boas Práticas Aplicadas
Tipagem Estrita com TypeScript:

Declaração de Interface para a entidade Jogo e para as Props dos componentes.

Uso de Union Types para delimitar as plataformas aceitas ("xbox" | "playstation" | "nintendo").

Performance e Renderização Otimizada:

Uso correto da propriedade key={jogo.id} no encadeamento de métodos de array (.map), evitando re-renders desnecessários no Virtual DOM.

Caminhos Estáticos Absolutos:

Consumo otimizado de ativos estáticos a partir da pasta /public com o componente <Image /> do Next.js.

🚀 Como Executar o Projeto Localmente
Clone o repositório:
```

```Bash
git clone [https://github.com/fau-33/projeto-jogos.git](https://github.com/fau-33/projeto-jogos.git)
Acesse a pasta do projeto:

Bash
cd projeto-jogos
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse http://localhost:3000 no seu navegador.

👨‍💻 Autor
Desenvolvido por Flávio Leandro.

Sinta-se à vontade para conectar-se comigo ou enviar feedback sobre o projeto!

```
