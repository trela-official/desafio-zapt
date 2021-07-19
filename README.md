## Como o projeto foi desenvolvido

Olá! Esse projeto foi feito com carinho para o processo seletivo da [Zapt](https://zapt.com.br/). Você pode visualizar [aqui](https://desafio-zapt-seven.vercel.app/)!

Com o intuito de simular uma aplicação escalável, foquei em construir componentes semânticos e que possam ser reutilizados em diferentes contextos. Acredito que isso contribui para a padronização, ajuda a implementar o design system e contribui na diminuição da curva de aprendizado do projeto para novos desenvolvedores. Senco assim, explico o uso de alguns componentes:

- **Typography** - Componentes de tipografia que podem ser usados em outros componentes / páginas. Ex: `H2`, `Body`, `H3`, etc..
- **Separator** - Componente utilizado para dar espaçamento.
- **Hbox** - Horizontal Box, ou Hbox, é um componente que permite o uso do flexbox nos elementos filhos. Com isso diminui a necessidade de criarmos `Containers` e `Wrappers` dentro dos componentes.
- **HboxItem** - Children do Hbox.
- **HboxSeparator** - Espaçamento entre HboxItems.
- **Card** - Componente de card que é utilizado como base para o `SocialCommentsCard` e o `UserOpinionCard`

Além disso, abstrai os componentes de libs externas para facilitar uma futura troca de libs (se for o caso) sem impactar muito o uso do componente. Exemplo: `Masonry` e `Carousel`.

Observações:

- Fiz os commits com base no [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Acredito que tal padronização deixe o histórico de commits mais didático para qualquer desenvolvedor que precise olhar.
- Em alguns componentes, senti a necessidade de criar um arquivo `model` para salvar a tipagem das props do componente evitando, assim, referência circular. Utilizei a [madge](https://www.npmjs.com/package/madge) para detectar tal problema. Fiz isso no componente de `Card` por exemplo. *No caso, `CardProps` é utilizada tanto no arquivo do componente quanto no arquivo de estilo.*


## Algumas libs utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Editor Config](https://editorconfig.org/)

## Iniciando o ambiente de desenvolvimento

Execute os seguintes comando:

```bash
yarn
```

```bash
yarn dev
```

Prontinho, agora basta acessar [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## Scripts disponíveis

- `yarn`: instala as dependências;
- `dev`: executa a aplicação no `localhost:3000`;
- `build`: faz o build da aplicação;
- `start`: inicia a aplicação;
- `lint`: executa o linter em todos os componentes e páginas;
- `test`: executa o teste de todos os componentes e páginas;
- `test:watch`: executa o teste em watch mode;
- `storybook`: executa o storybook no `localhost:6006`;
- `build-storybook`: faz o build do storybook;
