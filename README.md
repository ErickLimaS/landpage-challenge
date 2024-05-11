## Critérios

- [x] Conter todas as dobras e conteúdo presentes no criativo
- [x] Deve ser desenvolvido utilizando Next.js
- [x] Para o estilo utilizar Tailwind CSS
- [x] A página deve ser responsiva
- [x] (form): Todos os campos são obrigatórios 
- [x] (form): O campo e-mail deve aceitar apenas e-mails válidos
- [x] (form): O campo telefone deve aceitar o seguinte padrão (XX) XXXXX-XXXX

## Considerações

- ``Testes de Componentes`` feitos com <a href="https://jestjs.io/pt-BR/" target="_blank" rel="no-referrer" >Jest</a>
- Foi utilizado <a href="https://react-svgr.com/" target="_blank" rel="no-referrer" >SVGR</a> para o uso de SVGs.

## Como Rodar com Docker

Imagem disponível no <a href="https://hub.docker.com/repository/docker/ericklimas/tesis-erick-desafio/general" target="_blank" rel="no-referrer" >Docker Hub</a>.

Use os seguintes comandos:

```javascript
docker pull ericklimas/tesis-erick-desafio:1.0
docker run -p 3000:3000 ericklimas/tesis-erick-desafio:1.0
```
O site estará disponível como <a href="https://localhost:3000" target="_blank" rel="no-referrer" >localhost:3000</a>.

Caso queira trocar a porta, troque ``-p 3000:3000`` para ``-p [nova-porta]:3000``.

## Como Rodar Localmente 

1. Faça o ``Fork`` ou ``Clone`` esse repositório:
```javascript
gh repo clone ErickLimaS/tesis-desafio
```

2. Dentro da pasta raiz, ``instale as dependências`` usadas no projeto através desse comando:
```javascript
npm install
```

3. Execute localmente na porta padrão (:3000) com esse comando:
```javascript
npm run dev
```

4. Pronto! Acesse http://localhost:3000/ para ver o site funcionando!
