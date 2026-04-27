# 🌸 BioLink — Link da Bio Estilizado

> Página de link na bio profissional e elegante, feita com **React + Redux + Cypress**.

## 🚀 Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev
# → Acesse http://localhost:3000
```

## 🧪 Testes com Cypress

```bash
# Modo interativo (recomendado)
npm run cypress:open

# Modo headless (CI)
npm run cypress:run
```

> **Atenção:** o app precisa estar rodando (`npm run dev`) antes de executar os testes.

## 📁 Estrutura

```
biolink/
├── src/
│   ├── components/
│   │   └── BioPage.jsx       # Componente principal da página
│   ├── store/
│   │   └── index.js          # Redux store (dados do perfil)
│   ├── styles/
│   │   └── main.css          # Estilos globais
│   ├── App.jsx
│   └── main.jsx
├── cypress/
│   ├── e2e/
│   │   └── bio.cy.js         # Testes E2E
│   └── support/
│       └── e2e.js
├── index.html
├── vite.config.js
└── cypress.config.js
```

## ✏️ Personalizar

Edite o estado inicial em `src/store/index.js`:

```js
initialState: {
  name: 'Seu Nome Aqui',
  title: 'Sua Profissão',
  about: 'Seu texto de apresentação...',
  services: [ /* seus serviços */ ],
  links: [ /* seus links */ ],
  contact: {
    whatsapp: 'https://wa.me/55SEU_NUMERO',
    instagram: 'https://instagram.com/seu_perfil',
    email: 'mailto:seu@email.com',
  }
}
```

## 🎨 Tecnologias

- **React 18** — UI declarativa
- **Redux Toolkit** — gerenciamento de estado global
- **Vite** — bundler ultrarrápido
- **Cypress** — testes E2E
- **Cormorant Garamond + Jost** — tipografia elegante
