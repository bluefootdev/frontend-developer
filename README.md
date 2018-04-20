# Descrição
Esse projeto foi criado para consumir a api retornando produtos sugeridos através do autocomplete.
Ao clicar em um dos produtos sugeridos deve retornar os produtos de outro endpoint com fulltext e mostrá-los em uma listagem.

# Dependendências
Projeto criado com create-reac-app por praticidade e velocidade de entrega.
Usei de redux para controlar o estado da aplicação. Pois já fiz alguns testes com react context e não ficou muito bem do jeito que eu queria.
Não usei sass, pois o projeto não é tão grande. Logo não achei necessário.
Para o outsideclick do container de sugestões usei o [onClickOutside](https://github.com/Pomax/react-onclickoutside).

# Instruções
* Instalar dependências: ```$ yarn install```
* Rodar projeto:  ```$ yarn start```
* Build production:  ```$ yarn build```

# Estrutura Principal */src*
```
│─── api (services)
│   │
│   └─── cards
│
│─── assets
│   │
│   └─── svg
│   │
│   └─── css
│
└─── components
    │
    └─── app (main component)
    │
    └─── header
    │   │
    │   └─── autocomplete
    │   │
    │   └─── suggested-container
    │       │
    │       └─── suggested-container-title
    │       │
    │       └─── suggested-names-list
    │       │
    │       └─── suggested-product-items
    │
    └─── products-list
    │   │
    │   └─── product
    │       │
    │       └─── product-info
    │       │
    │       └─── product-thumb
    │
    └─── store
        │
        └─── reducers
```