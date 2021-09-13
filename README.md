<h1 align="center">Car Valuation</h1>

<p align="center">

<img src="https://img.shields.io/badge/typescript-%5E4.0.3-green" >

<img src="https://img.shields.io/badge/react-%5E16.12.0-green" >


<h2 align="center"><a  href="https://car-valuation.netlify.app/">Acessar Live</a></h2>

</p>

## Descrição

Sistema Web desenvolvido em React & Typescript (SPA) para ajudar o dono de um veículo a descobrir quanto vale o seu carro.

## Instalação

Para colocar o projeto em funcionamento e visualizar os componentes no navegador, conclua as seguintes etapas:

1. Tenha yarn ou npm instalado;
2. Clone este repositório: `git clone https://github.com/ViniciusmDias/car-valuation.git`
3. Instale as dependências do projeto: `yarn`
4. Inicie o modo de desenvolvimento: `yarn start`
5. Abra seu navegador e entre em: <http://localhost:3000>

## Estrutura do Repositório

Às vezes, é útil saber para que servem todos esses arquivos diferentes...

```
/
├─ public/
├─ src/
│  ├─ assets/           # Imagens
│  │
│  ├─ components/       # Todos os componentes reutilizáveis
│  ├─ contexts/         # Contextos da aplicação, estados globais
│  ├─ pages/            # Páginas
│  ├─ routes/           # Rotas
│  ├─ services/         # Api e funções de requisição;
│  ├─ styles/           # Estilos globais
│  ├─ types/            # Tipos globais
│  └─ utils/            # Funções globais
│
├─ .env                 # Variáveis de ambiente
├─ .eslintignore        # Regras ignoradas pelo ESLint
├─ .eslintrc.json       # Preferências do ESLint
├─ .gitignore           # Arquivos ignorados pelo git
├─ package.json         # Project manifest
├─ .prettier.config.js  # Configurações do Prettier
├─ README.md            # This file
├─ tsconfig.json        # Configurações do Typescript
└─ yarn.lock            # Configurações do Yarn
