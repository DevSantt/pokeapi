# PokeAPI - Projeto Pokedex
### Sumário 

- [O projeto](#o-projeto)
- [Funcionalidades](#funcionalidades)
- [Design](#design)
    - [Desktop Design](#desktop-design)
    - [Mobile Design](#mobile-design)
- [Tecnologias Usadas](#teconologias-usadas)
- [Planejamento e Execução](#planejamento-e-execucao)
- [Rodando o projeto](#rodando-o-projeto)
- [Autor](#autor)


## O Projeto

![Project Gif](./src/img/overviewa.gif)

Na obra Pokemon, pokedex se trata de uma enciclopédia portátil que detém todas as espécies de pokémon. Por isso o nome Projeto Pokedex, que funciona como uma pokedex virtual que recebe os dados de uma API (PokeApi). O objetivo desse projeto é criar um SPA que exiba diversos cards de pokemons e, quando um desses cards for clicado pelo usuário, será direcionado para uma nova tela onde haverá informações aprofundadas daquele pokemon em um layout personalizado que simula como como se o usuário estivesse consultando-as numa pokedex.

## Funcionalidades

Está aplicação possui apenas duas páginas que podem ser acessadas pelo usuário, contendo as seguintes funcionalidades:

- A primeira página(Home) exibe uma lista completa de todos os pokémons com seus nome e um sprie animado.
- Quando um pokémon é clicado, o usuário é direcionado a sua página de informações(profile) onde contém as principais informações de determinado pokémon, como: nome, arte oficial, habilidades, tipos e movimentos.
- A aplicação também possui uma alavanca no canto superior direito que serve para alterar entre os temas claro e escuro (dark ou light).

## Design

### Desktop Design 
![A fazer: Adicionar Screenshot]

### Mobile Design
![A fazer: Adicionar Screenshot]

## Tecnologias usadas
Para este projeto, as principais tecnologias e ferramentas usadas foram:

- Vite para uma criação rápida e efetiva da aplicação React.
- a biblioteca styled-components foi utilizada em conjunto com a font-awesome para toda a estilização de ícones e elementos do projeto visando um código limpo e com o mínimo de arquivos possíveis.
- a navegação foi feita através da biblioteca react-router-dom, para uma navegação rápida entre as páginas.
- axios para realizar requisições na api com o mínimo de código possível.

## Planejamento e Execução

O planejamento e execução foi realizado sefuindo as seguintes etapas:

1. Estrutura inicial das pastas do projeto para uma melhor organização.
2. Criar as duas rotas existentes para o funcionamento do projeto.
3. Renderizar os componentes JSX com um código semântico para melhor compreensão.
4. Estilização dos componentes com styled-components para melhor praticidade e visualização.
5. Realizar as requisições necessárias na API e utilizá-las nos componentes corretos. Durante a criação do projeto, tive algumas dificuldades, principalmente devido a complexibilidade desta Api. Por isso, decidi utilizar o axios para facilitar e tornar mais prático a utilização da mesma.
6. Criar um alternador de temas com Context API para englobar toso o projeto e usar as cores que foram criadas em variáveis.
7. Tornar o projeto responsivo para diferentes tipos de tela.

## Rodando o Projeto

Para executar exte projeto em sua máquina, siga os seguintes passos:

Passo 1: Crie um clone desde repositório em algum diretório de seu computador. Você pode fazer isso diretamente pelo Github ou com o comando git clone (url) no git bash.

Passo 2: Após clonar o projeto, abra o terminal de sua preferência no diretório usado.

Passo 3: Com o terminal aberto, instale as dependências do projeto com o comando "npm install".

Passo 4: Digite o comando "npm run dev" e aguarde o carregamento.

Passo 5: Agora basta teclar a tecla "o" e o projeto será aberto em seu navegador.

## Autor
Siga minhas redes!

- Github: [/omatheusant](https://github.com/omatheusant)
- Linkedin: [/omatheussant](https://www.linkedin.com/in/omatheussant/)
- Twitter: [/omatheusant](https://twitter.com/omatheusant)
