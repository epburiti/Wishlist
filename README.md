# :bookmark_tabs: Wishlist

> App para listar e escolher os favoritos de uma lista de produtos.
> Arquivos configurados em Monorepo(obs: os testes não ficaram configurados globalmente pois o React está utilizando webpack)

## :rocket:Tecnologias usadas

- [React](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Node.js](https://nodejs.org/)
- [expres](https://expressjs.com/pt-br/)
- [jest](https://jestjs.io/pt-BR/)
- [Axios](https://github.com/axios/axios)
- [Styled components](https://styled-components.com/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

## Instalação

Você deverá ter em sua máquina os seguinte itens:

- [Node.js](http://nodejs.org/) 10.0.0 (ou superior)
- [ReactJS](https://pt-br.reactjs.org/)
- [Git](http://git-scm.com/)

1. Faça um Fork ou clone este repositório.

2. Instale as dependências do projeto na pasta root:

   ```sh
   npm install
   ```

   ou se você usa yarn:

   ```sh
   yarn
   ```

## Execução

Para início da aplicação, execute:

#### Web:

```sh
npm run dev
```

ou se você usa yarn:

```sh
yarn dev
```

#### Server:

```sh
npm run start
```

ou se você usa yarn:

```sh
yarn start
```

## Testes

_Os testes estão localizados nas pastas `__tests__`. vá até a pasta web para rodar os testes do ReactJS e ate a pasta server para rodar os testes do node, as mesmas estão localizadas dentro da pasta packages_

Use o comando abaixo para executar os testes:

```sh
npm test
```

ou se você usa yarn:

```sh
yarn test
```

_OBS:. A execução dos testes efetua a limpeza das tabelas ao final dos testes_

## Endpoints

#### Products:

_GET:. retorna os dados do produto do backend_

#### Favorites:

##### `GET:` `/favoritos` `retorna os dados dos favoritos que estão salvos no firebase`

_DELETE: /favoritos/<favoriteId>_

_POST:. /favoritos retorna os dados dos favoritos que estão salvos no firebase_

```json
	"id":"636",
	"favoritesId":"(GERADO AUTOMATICAMENTE PELO FIREBASE)"
```
