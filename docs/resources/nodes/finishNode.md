# FinishNode

Representa o evento de termino do processo. 

Uma blueprint *deve* ter um finishNode e *pode* ter múltiplos finishNodes.

:::note 
Trata-se de uma boa prática criar múltiplos finishNodes caso o processo tenha gerado estados distintos (por exemplo: processo finalizado por inatividade).

Isso facilita a realização de análises dos processos.
:::

Diferente dos demais nós, o valor do atributo *next* do FinishNode deve ser igual a **null**.

## Parâmetros

O nó de término pode receber parâmetros opcionais.

Os parâmetros do finishNode transferem os dados para o campo result no estado final do processo.

Caso o processo seja evocado como um subProcesso, os *result* do finishNode será transmitido para o processo-pai.

## Exemplo

```json
{
    "id": "12",
    "type": "Finish",
    "name": "Término Hello",
    "lane_id": "1",
    "next": null,
    "parameters": {
        "input": {
            "field": { "$ref": "bag.someField" }
        }
    }
}
```