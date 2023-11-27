# Game Drawer 🕹️

O *Game Drawer* é um web aplicativo que funciona de forma bem
simples: Você clica em um botão e ele te retorna um jogo.

Ele serve basicamente para eu e meus amigos quando estamos em dúvida
do que jogar, sanarmos a mesma.

Se quiser usar, seja feliz. 🤝

## Tecnologias 🛠️

- React
- TypeScript
- ViteJS
- TailwindCSS
   - Autoprefixer
   - DaisyUI
   - POSTCSS
- ESLint

## Rodando o projeto

Para rodar o projeto, rode o seguinte comando:

```bash
npm install && npm run dev
```

```bash
yarn install && yarn run dev
```

```bash
pnpm install && pnpm run dev
```

E pronto, projeto rodando!

## Estrutura do projeto

```
├── src/
│   ├── components
│   ├── constants
│   ├── styles
│   ├── utils
│   └── /...
├── index.html
├── tsconfig.json
└── /...
```

- `/components`: É onde os componentes da aplicação ficam (no caso, só o <Card/>);
- `/constants`: Aqui fica a constante que armazena todos os games que nós podemos jogar juntos;
- `/styles`: Tem só o arquivo que importa o Tailwind CSS;
- `/utils`: Tem o utilitário para sortear o jogo.

---

Licença: MIT