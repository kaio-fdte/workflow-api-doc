# UserTaskNode

Nó de usuário. 

Este tipo de nó descreve uma interação com um canal, que normalmente é uma interface com um humano.

O processo ao atingir um nó de userTask, realiza uma pré-execução, que avaliará os parâmetros de entrada da tarefa e enviará tais parâmetros para o 
gerenciador de atividades (Activity Manager).

Diferente das tarefas de sistema, um userTask gera uma interrupção do processo, que entra em um estado de espera *WAITING* até que receba uma confirmação do Activity Manager de que a tarefa foi concluída. Dessa forma, assim como o startNode, uma userTask gera 2 estados no processo.

## Parâmetros

Uma userTask pode receber até 6 parâmetros:
+ action (obrigatório)
+ input (obrigatório)
+ timeout
+ activity_schema
+ activity_manager
+ result_schema

### Action & Input

O conceito de userTasks no flowBuild é inspirado nas Redux Actions.

Uma tarefa é descrita por 2 atributos, uma ação (*action*) e um payload (*input*).

O campo *action* é descrito com um texto e recomenda-se que utilize-se um verbo de ação que explique o resultado esperado da tarefa:
+ Confirmar_aceite
+ Preencher_dados_pessoais
+ Enviar_documentos

Geralmente, para que a tarefa seja executada, é necessário que a interface exiba um conjunto de informações para o usuário, tais informações são descritas pelo *objeto* input.

É importante que o input contenha o *mínimo* de informações *requeridas* para que o canal possa executar a tarefa junto ao usuário. Evite enviar informações não essenciais para execução da tarefa.

### Timeout

Descreve o prazo para que o usuário possa realizar a tarefa. Pode ser descrito como um valor inteiro (em segundos) ou como uma data-hora.

Caso esse parâmetro seja enviado como um valor numérico, este seja convertido em uma data absoluta no momento em que o Actvity Manager é criado.

No momento em que o prazo da atividade expirar, o Activity Manager irá submeter as atividades disponíveis para o processo, incluindo um atributo adicional ```is_continue=true```.


### Activity Manager

Determina a relação entre o processo e o Activity Manager.

São 2 opções possíveis:
+ commit (padrão): significa que o processo permanecerá em status *WAITING* até que o Activity Manager submeta a atividade para o processo.
+ notify: nesse caso o processo cria o Activity Manager, porém seguirá diretamente para um status *RUNNING*.

:::info
O Activity Manager do tipo notify permanecerá ativo até que a atividade expire (caso tenha um timeout definido), o canal submeta a atividade **ou** o processo finalize (por término, expiração ou erro).
:::

### Activity Schema

Descrito como um JSON Schema, descreve o formato esperado do payload de *commit* da tarefa.

Caso o canal envie um payload incompatível com o formato esperado, o Activity Manager irá recusar a tarefa, retornando um erro de validação (vide [api](../api)).
Um erro de validação do activity_schema não ocasiona estado de erro no processo.

### Result Schema

Descrito como um JSON Schema, descreve o formato esperado do *result* do nó.

Nesse caso, a validação é feita após a submissão pelo Activity Manager, na validação pelo processo antes de gerar o result do nó.

A falha de validação desse momento ocasiona um estado de erro no processo. 

## Exemplo
```json
{
   "id":"2",
   "name":"Fill application form",
   "lane_id":"1",
   "next":"3",
   "type":"UserTask",
   "parameters":{
      "input":{
         "cities":{ "$ref":"bag.cities" },
         "reasons":{ "$ref":"bag.reasons" }
      },
      "action":"FILL_FORM_SELECTS",
      "activity_manager": "commit",
      "timeout": 600,
      "activity_schema": {
          "type": "object",
          "properties": {
              "nome": { "type": "string" },
              "dataNascimento": { "type" "string", "format": "date" },
              "city": { "type": "string" },
              "reason": { "type": "string" }
          }
      }
   }
}
```