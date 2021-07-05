# SubProcessNode

Representa um nó que permite iniciar outro processo **e** manter o processo principal aguardando sua execução.

Assim como um userTaskNode, o nó de subProcesso gera 2 estados: o primeiro estado é gerado com o status **DELEGATED** e é gerado logo após o subProcesso ter sido criado. O segundo estado é gerado após o término da execução do subprocesso, com o status **RUNNING**.

Caso seja necessário que dados gerados pelo subprocesso sejam transmitidos para o processo-pai, tais dados devem ser discriminados nos *parameters* do finishNode do subprocesso.

## Parâmetros

Este nó pode receber 4 parâmetros:
+ workflow_name (obrigatório)
+ actor_data (obrigatório)
+ input
+ valid_response

#### workflow name

Trata-se do nome do workflow que deverá ser iniciado. 

#### actor data

Trata-se de um *objeto* com o actor_data que dever ser utilizado para criar e iniciar o subprocesso.

Assim como no nó de StartProcess, a criação e execução de um subprocesso passa por todas as etapas de validação do startNode feitas para criação de um processo normal.

#### input

Trata-se de um *objeto* que determina os dados iniciais que serão passados do processo-pai para o subprocesso.

:::note
Se o startNode do subprocesso contém um input schema, é necessário incluir neste um atributo parent_process_data, que contém os dados do processo-pai que evocou o subprocesso.

É através desse atributo que o flowbuild identifica, ao final da execução do subprocesso, que há um processo-pai que deve ser notificado.
:::

#### valid response

De forma análoga ao nó http, esse campo é definido como uma lista de status aceitos como válidos para continuidade do processo pai ao final da execução do subprocess.

Assim como no caso do nó http, caso o subprocesso finalize em um status diferente do descrito como status válido, o processo-pai gera um estado de **ERROR**.

## Exemplo

```json
{
    "id": "3-X",
    "name": "Calcular orçamento",
    "type": "SubProcess",
    "next": "3-XB",
    "lane_id": "vendedor",
    "parameters": {
        "workflow_name": "calcularOrcamento",
        "actor_data": { "$ref": "actor_data" },
        "valid_response": "finished",
        "input": {
            "orcamento_id": { "$ref": "bag.orcamento_id" },
        },
    },
}
```