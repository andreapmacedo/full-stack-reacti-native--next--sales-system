### Criando o projeto


#### Utilizando o React Native CLI

Para criar um novo projeto com o React Native, executamos o seguinte comando:
  - `npx`: é um comando que vem junto com o `npm` e serve para executar pacotes que estão instalados no projeto, sem a necessidade de instalar globalmente.

  - Adiciona o template do typescript ao projeto
```bash
npx react-native@latest vendas-online-app --template react-native-template-typescript
```


### Rodando o projeto no emulador

Para rodar o projeto no emulador, executamos o seguinte comando:
```bash
npm run start
```

> Em seguida, em outro terminal
```bash
npm run android
```


### Instalando o EsLint e o Prettier
> OBS.: Não utilizei
Para instalar o EsLint e o Prettier, executamos o seguinte comando:
```bash
npm install eslint --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort pre-commit prettier
```

### Instalando o Styled Components

Para instalar o Styled Components, executamos o seguinte comando:
```bash
yarn add styled-components
```
> Intalando o types para o styled components
```bash
yarn add @types/styled-components-react-native -D
```
