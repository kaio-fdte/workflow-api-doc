# Instalação

Caso o(a) usuário(a) deseje testar a API localmente, basta seguir os passos abaixo:

## Dependências necessárias

As seguintes dependências são necessárias para o funcionamento da API: Node e NPM


```
node -v
v14.16.1

npm -v
6.12.0
```

## Variáveis de ambiente

Para mudar a senha JWT da aplicação (o padrão é "1234", sem aspas), altere a seguinte linha no arquivo .env (ou .env.docker se estiver usando docker):

```JWT_KEY=sua-nova-senha```

## Rode o projeto no docker

Para rodar o docker, execute o código:

```
docker-compose up
```

Certifique-se que as portas 3000 e 5432 estejam liberadas no seu localhost.

### Usuários Windows

Usuários de Windows precisarão instalar o [Docker Desktop](https://www.docker.com/products/docker-desktop) e ativar as ferramentas de virtualização do Windows.

>Anteriormente era necessário instalar uma versão do Linux na máquina utilizando o WLS2, mas essa nova ferramenta automatiza todo o processo. 

Antes de iniciarem a aplicação, é necessário ajustar a chave ```command``` no arquivo docker-compose.yml para:

```
bash -c " npm update && npm install knex -g && npm install nodemon -g && npm install && npm rebuild && npm run migrations && npm run seeds && npm run start "
```

Após a instalação do docker desktop e do comando acima, execute o comando

```
docker-compose up
```

## Explorando e executando a API

Com a aplicação executando, você pode explorar todas as rotas possíveis em ```http://localhost:3000/swagger```

> Se você mudar a url base, lembre de mudar também seu arquivo openapi3.yaml.

Se desejar usar um programa de terceiros, como Insomnia ou Postman, basta importar o arquivo
openapi3.yaml e todos as rotas serão exibidas. 

Se usar o Postman, é recomendado mudar o arquivo organization para Tags após selecionar o arquivo a ser importado.

## Bibliografia

**Como instalar o docker no Windows**

https://www.docker.com/get-started

**Como instalar o docker no Linux**

https://docs.docker.com/engine/install/