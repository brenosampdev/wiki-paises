# WikiPaíses

Catálogo digital de nações soberanas construído com React + Vite, consumindo a [REST Countries API](https://restcountries.com).

![Preview da aplicação](https://i.imgur.com/1mhDtMO.png)

## Links

- **Deploy:** <https://wiki-paises-ten.vercel.app/>
- **Repositório:** <https://github.com/brenosampdev/wiki-paises>

## Sobre o projeto

Projeto acadêmico da disciplina - Desenvolvimento de Plataformas Web (UNIFOR), orientado pelo Prof. Bruno Lopes. Aplicação front-end que permite explorar informações de países através de duas telas:

- **Home (`/`):** listagem paginada de países, com busca por nome, filtro por continente e navegação para detalhes.
- **Detail (`/country/:code`):** informações completas de um país (bandeira, nome oficial, capital, continente, sub-região, área, população, idiomas, moeda e código).

## Stack

- **React 19** + **TypeScript** + **Vite**
- **React Router DOM** — navegação entre telas
- **Axios** — requisições HTTP
- **Tailwind CSS** — estilização
- **Phosphor Icons** — biblioteca de ícones

## Estrutura de pastas

```
src/
├── services/          # Requisições HTTP (Axios) organizadas por domínio
│   └── countries/
├── types/             # Tipos TypeScript (DTOs)
├── ui/
│   ├── components/    # Componentes reutilizáveis
│   │   ├── home/
│   │   ├── details/
│   │   └── shared/    # Header, Footer, LoadingState, ErrorState
│   └── pages/         # Home e CountryDetail
└── App.tsx            # Configuração das rotas
```

## Como rodar localmente

Requisitos: Node.js 18+ e npm.

```bash
# Clonar o repositório
git clone https://github.com/SEU-USUARIO/wiki-paises.git
cd wiki-paises

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build de produção
npm run build
```

A aplicação abre em `http://localhost:5173`.

## Funcionalidades

- [x] Listagem de países com dados da REST Countries API
- [x] Busca por nome (filtragem em tempo real)
- [x] Filtro por continente (Americas, Europe, Asia, Africa, Oceania)
- [x] Paginação com controles Previous/Next
- [x] Empty state quando a busca não retorna resultados
- [x] Estados de loading e erro em operações assíncronas
- [x] Navegação para tela de detalhes ao clicar em um card
- [x] Tela de detalhes com bandeira em destaque, dados formatados e seção descritiva
- [x] Navegação via URL stateless (filtros persistem em recarga)
- [x] Layout responsivo (mobile e desktop)

## Sobre o uso de IA

O desenvolvimento deste projeto contou com auxílio de IA (Claude, da Anthropic) como ferramenta de aprendizado e revisão. Todos os prompts e respostas utilizados estão documentados no PDF de entrega conforme exigido pelo instrumento de avaliação.

---

Projeto acadêmico UNIFOR · 2026