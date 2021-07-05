# StartNode

Representa o evento que marca o início de um processo.

É permitido que um processo tenha múltiplos nós de início, desde que nenhum ator seja capaz de acessar mais de um nó.

:::caution ATENÇÃO  

🚨 Na eventualidade de um ator tenho acesso a múltiplos StartNodes, o processo não será criado.

:::

O nó de início gera 2 (dois) estados: o primeiro estado é gerado no momento da criação do processo (status = UNSTARTED)
e um segundo estado é gerado no momento em que o processo é iniciado (status = RUNNING).

## Parâmetros

Este nó pode receber 2 parâmetros:
+ input_schema
+ timeout

#### input schema

Um objeto representando o JSON Schema do payload de inicio do processo.
É obrigatória a inclusão do atributo nos parameters do startNode, mesmo que na forma de um objeto vazio.

Caso presente, o payload será validado *após a criação* do processo, no momento do início da execução do processo.

#### timeout

Um número inteiro que representa o prazo (em segundos) para expiração do processo.
Expirado esse prazo, o processo será finalizado com o status EXPIRED.

> Se, no momento da expiração do processo, este estiver em status RUNNING, a expiração não ocorrerá.

## Exemplo

```json
{
    "id":"0",
    "name":"Start Hello",
    "lane_id":"1",
    "next":"1",
    "type":"Start",
    "parameters": {
        "input_schema": {},
        "timeout": 10
    }
}
```