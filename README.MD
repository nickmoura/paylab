# 💳 Paylab – Gateway de Pagamento Full Stack

[![made-with-nodejs](https://img.shields.io/badge/Backend-Node.js-green?style=flat&logo=node.js)](https://nodejs.org/)
[![made-with-react](https://img.shields.io/badge/Frontend-React-blue?style=flat&logo=react)]
[![vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

> Um gateway de pagamento simples, funcional e com potencial de virar grande. Feito com Node.js + React + Vite + Toastify.

---

## 🧠 Tecnologias Usadas

### Backend (Node.js)
- Node.js + Express
- CORS
- dotenv
- body-parser
- Stripe (ou outro gateway)

### Frontend (React + Vite)
- React
- Vite
- Axios
- Toastify
- HTML, CSS & JS na unha

---

## 📁 Estrutura do Projeto

paylab/
├── server/ # Backend com Node.js 
│ ├── index.js 
│ └── routes/ 
│ └── payments.js 
├── client/ # Frontend com React + Vite 
│ ├── src/ 
│ │ ├── App.jsx 
│ │ ├── main.jsx 
│ │ └── components/ 
│ ├── public/ 
│ └── vite.config.js 
├── .gitignore 
├── package.json 
├── README.md

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/nickmoura/paylab.git
cd paylab 
```

### 2. Instale as dependências

#### Backend

```bash
cd server
npm install
```
#### Frontend
```bash
cd ../client
npm install
```

### 3. Rode a aplicação

#### Backend

```bash
cd server
npm run dev
```

#### Frontend

```bash
cd ../client
npm run dev
```

## Variáveis de ambiente

Garanta que dentro da pasta server há um arquivo .env contendo:

```bash
PORT=5000
STRIPE_SECRET_KEY=sua_chave_do_gateway
```

## Features
- Features
- Integração entre front e back
- Toasts com feedback
- Estrutura modular
- Código limpinho
- Testes automatizados (em breve)
- Painel de admin (em breve)
- Validação e antifraude (em breve)

 ## Licença

 Projeto licenciado sob a MIT License.

 ## Feito por [Nick Moura](https://github.com/nickmoura/)

Com chá mate, pós-punk e Pokémon Crystal.