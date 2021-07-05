# Tokens

As requisições para as APIs do Flowbuild são utilizam autenticação via Bearer authentication (ou token authentication).
Todas as requisições devem conter um header de autorização contendo um token JWT.

O conteúdo do token será utilizado também para lidar com a autorização a tarefas e workflows.

## Payload

O token utilizado para autenticação deverá conter, ao menos, os campos:
actor_id: utilizado como identificador único do usuário
claims: uma lista de direitos do detentor do token, geralmente em forma de "strings".

Exemplo:

```json
{
  "actor_id": "85b579e0-dc41-11eb-a6b3-d3619c91018b",
  "claims": ["oneClaim","anotherClaim"],
  "iat": 1625345953,
  "exp": 1625349553
}
```

## Validação do Token

A validação do token é feita através de um middleware na aplicação que verifica a assinatura do token, sua expiração e os requisitos mínimos do payload.

A chave de assinatura do token pode ser alterada através do .env da aplicação (ou .env.docker se estiver executando a aplicação via docker):

```
JWT_KEY=newsecret
```

Após validado, os campos do payload são passados para o processo, juntamente com campos de [trace](https://www.w3.org/TR/trace-context/ "Trace Context"), dentro do espaço actor_data.

## Geração de Token

A API do flowbuild contém uma rota específica para [geração de tokens](../resources/api).
É possível gerar um token por fora da aplicação, utilizando ferramentas como jwt.io, nesse caso, garanta que esteja utilizando a mesma assinatura configurada no
middleware de validação de token.
