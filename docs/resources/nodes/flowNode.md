# FlowNode

Nó de fluxo. 

No BPMN, trata-se de um gateway exclusivo.

## Parâmetros

O flowNode espera em seus parâmentros um único atributo que representa o valor que será utilizado para direcionamento do processo.

O valor atribuído será convertido em texto e comparado com as opções descritas no objeto *next* descrito no especificação do nó.

Caso o atributo especificado nos parameters não esteja definido, o flowNode gerará o texto *undefined* para comparação.


:::info
A comparação do parâmetro de input com os resultado é case-sensitive.
:::

## Next

Diferente dos demais nós do flowBuild, o atributo *next* de um flowNode é representado por um objeto e não por uma string.

Este objeto deve ser um conjunto de atributos que serão avaliados contra o valor do parâmetro especificado.

É obrigatório que um dos atributos do objeto *next* do flowNode seja *default*, que será utilizado caso nenhum resultado seja identificado.

## Exemplo

```json
{
   "id":"9",
   "type":"Flow",
   "name":"Is User Registered?",
   "lane_id":"1",
   "next":{
      "default":"10",
      "201":"11",
      "206":"11"
   },
   "parameters":{
      "input":{
         "decision":{
            "$ref":"bag.registerUserResponse.status"
         }
      }
   }
}
```