---
sidebar_position: 1
---

# MUSTACHE

Nessa parte vamos descobrir quais são os **eventos** disponíveis.

## PROCESS_STATE_LISTENER

Evento que ocorre quando um processo muda seu estado.

Mensagem: NEW PROCESS_STATE

Exemplo: ```emitter.emit('PROCESS_STATE_LISTENER',`NEW PROCESS_STATE`);```

## KNEX.UPDATE_ERROR

Evento que ocorre quando não é possível atualizar um objeto.

Mensagem: Unable to update object

Variáveis: error (tipo string) e obj_id (tipo string e format uuid)

Exemplo: ```emitter.emit('KNEX.UPDATE_ERROR', 'Unable to update object', { error: e, id: obj_id });```

## KNEX.DELETE_PROCESS_ERROR

Evento que ocorre quando não é possível deletar um determinado processo.

Mensagem: Unable delete Process with PID [process_id]

Variáveis: error (tipo string) e process_id (tipo string e format uuid)

Exemplo: ```emitter.emit('KNEX.DELETE_PROCESS_ERROR', `Unable delete Process with PID [${this.id}]`, { error: e, process_id: this.id });```

## KNEX.CREATE_PROCESS_ERROR

Evento que ocorre quando não é possível criar um determinado processo.

Mensagem: Unable delete Process with PID [${this.id}]

Variáveis: error (tipo string) e process_id (tipo string format uuid)

Exemplo: ```emitter.emit('KNEX.CREATE_PROCESS_ERROR', `Unable delete Process with PID [${this.id}]`, { error: e, process_id: this.id } );```

## KNEX.UPDATE_PROCESS_ERROR

Evento que ocorre quando não é possível atualizar um determinado processo.

Mensagem: Unable to update Process with PID [${process_id}]

Variáveis: error (tipo string) e process_id (tipo string format uuid)

Exemplo: ```emitter.emit('KNEX.UPDATE_PROCESS_ERROR', `Unable to update Process with PID [${process_id}]`, { error: e, process_id } );```

## REQUESTS.TRACE.START

Evento que ocorre quando mapea as solicitações HTTP realizadas ????

Mensagem: Setting Trace Parent

Exemplo: ```emitter.emit('REQUESTS.TRACE.START',`SETTING TRACEPARENT`, {});```

## REQUESTS.TRACE.OLD

Evento que ocorre ao retornar as solicitações HTTP passadas

Mensagem: Old Traceparent

Variáveis: traceparent (tipo string??)

Exemplo: ```emitter.emit('REQUESTS.TRACE.OLD',`OLD TRACEPARENT`, { traceparent: headers.traceparent });```

## REQUESTS.TRACE.NEW

Evento que ocorre quando há novas solicitações HTTP???

Mensagem: New Traceparent

variáveis: traceparent (tipo string)

Exemplo: ```emitter.emit('REQUESTS.TRACE.NEW',`NEW TRACEPARENT`, { traceparent: headers.traceparent });```

## ACTIVITY_MANAGER.COMPLETED

Evento que ocorre quando um Activity Manager é completado

Mensagem: ACTIVITY MANAGER COMPLETED AMID: [activity_manager.id], {activity_manager: this}

Variáveis: activity_manager.id (tipo string, format uuid), activity_manager(tipo objeto com id (string format uuid), tipo (string), process_state_id(string format uuid), status(string))

Exemplo: ```emitter.emit("ACTIVITY_MANAGER.COMPLETED", `ACTIVITY MANAGER COMPLETED AMID: [${this.id}]`, {activity_manager: this});```

## ACTIVITY_MANAGER_TIMER.CLEARED

Evento que ocorre quando os TIMERS do ACTIVITU_MANAGER são limpos

Mensagem: CLEARED TIMERS FOR AMID [${this.id}]`,{ activity_manager_id: this.id })

Variáveis: activity_manager_id(string uuid)

Exemplo: ```emitter.emit('ACTIVITY_MANAGER_TIMER.CLEARED', `CLEARED TIMERS FOR AMID [${this.id}]`,{ activity_manager_id: this.id });```

## ACTIVITY_MANAGER_TIMER.CREATING_NEW

Evento que ocorre quando há a criação de um novo ACTIVITY_MANAGER_TIMER

Mensagem: ACTIVITY_MANAGER_TIMER.CREATING_NEW

Variáveis: activity_manager.id(string uuid)

Exemplo: ```emitter.emit('ACTIVITY_MANAGER_TIMER.CREATING_NEW',` CREATING NEW TIMER ON AMID [${this.id}] `,{ activity_manager_id: this.id });```

## ACTIVITY_MANAGER.NEW_TIMER

Evento que ocorre quando um novo ACTIVITY_MANAGER.NEW_TIMER é criado

Variáveis: activity_id (string uuid), timer_id(string uuid)

Exemplo: ```emitter.emit('ACTIVITY_MANAGER.NEW_TIMER',`      NEW TIMER ON AMID [${this.id}] TIMER [${timer.id}]`,{ activity_manager_id: this.id, timer_id: timer.id });```

## ACTIVITY_MANAGER.TIMEOUT_EXPIRED

Evento que ocorre quando há o timeout da ACTIVITY_MANAGER.TIMEOUT_EXPIRED

Variáveis: activity_manager.id (string uuid) e timer.id (uuid)

Exemplo: ```emitter.emit('ACTIVITY_MANAGER.TIMEOUT_EXPIRED',`TIMEOUT ON AMID [${this.id}] TIMER [${timer.id}]`,{ activity_manager_id: this.id, timer_id: timer.id });```

## ACTIVITY_MANAGER.COMPLETED

Evento que ocorre quando o ACTIVITY_MANAGER.COMPLETED é terminado

Mensagem: COMPLETED AMID [${this.id}]

Variáveis: activity_manager

Exemplo: ```emitter.emit('ACTIVITY_MANAGER.COMPLETED', `COMPLETED AMID [${this.id}]`, { activity_manager: activity_manager });```

## ACTIVITY_MANAGER_TIMER.CREATING_NEW

Evento que ocorre quando há criação de um novo ACTIVITY_MANAGER_TIMER.CREATING_NEW

Mensagem: CREATING NEW TIMER ON AMID [${id}]

variáveis: activity_manager_id(string uuid)

Exemplo: ```emitter.emit('ACTIVITY_MANAGER_TIMER.CREATING_NEW',`      CREATING NEW TIMER ON AMID [${id}]`,{ activity_manager_id: id });```

## BLUEPRINT.UNUSED_VARIABLES

Evento que ocorre quando há variáveis de ambiente que não são usadas

Mensagem: UNUSED ENVIRONMENT VARIABLES

Variáveis: nodes (array???) e ambient (array???)

Exemplo: ```emitter.emit('BLUEPRINT.UNUSED_VARIABLES','UNUSED ENVIRONMENT VARIABLES', { nodes: blueprint_env_status.nodes, ambient: blueprint_env_status.ambient } );```

## BLUEPRINT.NON_EXISTENT_VARIABLES

Evento que ocorre quando as as variáveis de ambiente não existentes são mostradas

Mensagem: UNUSED ENVIRONMENT VARIABLES

variáveis: ambient (array)

Exemplo: ```emitter.emit('BLUEPRINT.NON_EXISTENT_VARIABLES','UNUSED ENVIRONMENT VARIABLES', { ambient: blueprint_env_status.ambient } );```

## LANE.EVAL_ERROR

Evento que ocorre quando há erros ao avaliar as regras da raia

Mensagem: ERROR WHILE EVALUATING LANE RULE!

Variáveis: rule (array???) e error (string)

Exemplo: ```emitter.emit('LANE.EVAL_ERROR', "ERROR WHILE EVALUATING LANE RULE!", { rule: rule_lisp, error: e });```

## NODE.ERROR

Evento que ocorre quando há um erro em um específico nó

Mensagem: ERROR AT NID [${this.id}]

Variáveis: node_id (string uuid) e error (string)

Exemplo: ```emitter.emit('NODE.ERROR',`ERROR AT NID [${this.id}]`, {```

## NODE.START_VALIDATED

Evento que ocorrer quando o nó inicial é validado

Mensagem: START NODE VALIDATED

Variáveis: is_valid (boolean??) e error (string)

Exemplo: ```emitter.emit('NODE.START_VALIDATED','START NODE VALIDATED', { is_valid: is_valid, error: error });```

## PROCESS.RUN

Evento que ocorre quando há um determinado processo rodado

Mensagem RUN ON PID [${this.id}]

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.RUN',`RUN ON PID [${this.id}]`,{ process_id: this.id });```

## PROCESS.EDGE.ERROR

Evento que ocorre quando há erros de dados de um determinado processo

Mensagem: ERROR ON PROCESS PID [${this.id}] DATA [${this.workflow_name}]:[${current_node._spec.name}]

Variáveis: process_id(string uuid), workflow_name (string), node_id(string uuid) e node_name(string)

Exemplo: ```emitter.emit('PROCESS.EDGE.ERROR',`ERROR ON PROCESS PID [${this.id}] DATA [${this.workflow_name}]:[${current_node._spec.name}]`,{ process_id: this.id, workflow_name: this.workflow_name, node_id: current_node._spec.id, node_name: current_node._spec.name });```

## PROCESS.TIMER.CREATING

Evento ocorre quando há a criação de um timer em um determinado processo

Mensagem CREATING PROCESS TIMER ON PID [${this.id}]

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.TIMER.CREATING',`  CREATING PROCESS TIMER ON PID [${this.id}]`, { process_id: this.id });```

## PROCESS.TIMER.NEW

Evento que ocorre quando há um novo timer em um determinado processo

Mensagem:  PROCESS TIMER ON PID [${this.id}] TIMER [${timer.id}]

Variáveis: process_id (string uuid) e timer_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.TIMER.NEW',`  PROCESS TIMER ON PID [${this.id}] TIMER [${timer.id}]`, { process_id: this.id, timer_id: timer.id });```

## PROCESS.CONTINUE

Evento que ocorre quando há a continuação de um processo

Mensagem: CONTINUE ON PID [${this.id}]

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.CONTINUE',`CONTINUE ON PID [${this.id}]`, { process_id: this.id });```

## PROCESS.RUN_PENDING

Evento que ocorre quando há um determinado processo pendente

Mensagem RUN PENDING PID [${this.id}]

Variáveis: process_id(string)

Exemplo: ```emitter.emit('PROCESS.RUN_PENDING',`RUN PENDING PID [${this.id}]`, { process_id: this.id });```

## PROCESS.EDGE.EXPIRING

Evento que ocorre quando há um determinado processo expirado

Mensagem: EXPIRE PID [${this.id}]

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.EDGE.EXPIRING',`EXPIRE PID [${this.id}]`, { process_id: this.id });```

## PROCESS.EDGE.ABORTING

Evento que ocorre quando há o aborto de um determinado processo

Mensagem: ABORT PID [${this.id}]

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.EDGE.ABORTING',`ABORT PID [${this.id}]`, { process_id: this.id });```

## PROCESS.STATE.SET

Evento que ocorre quando é configurado o estado de um determinado processo

Mensagem: `SET STATE ON PID [${this.id}]

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.STATE.SET',`SET STATE ON PID [${this.id}]`, {```

## INNERLOOP.LOCK

Evento que retorna um determinado processo trancado

Mensagem: LOCK PID ${p_lock.id}

Variáveis: process_id (string uuid)

Exemplo: ```emitter.emit('INNERLOOP.LOCK',`      LOCK PID ${p_lock.id}`,{```

## INNERLOOP.STATE_LOCK

Evento que retorna um estado trancado de um determinado processo

Mensagem: LOCK PID [${p_lock.id}] PS [${ps_lock.id}]

Variáveis: process_id e process_state_id (string uuid)

Exemplo: ```emitter.emit('INNERLOOP.STATE_LOCK',` LOCK PID [${p_lock.id}] PS [${ps_lock.id}]`,{```

## PROCESS.EDGE.NODE_RESULT_ERROR

Evento que ocorre quando há um erro de JSON em um determinado processo

Mensagem NODE RESULT FROM NODE ID [${this.next_node._spec.id}] IS A INVALID JSON ON PID [${this.id}]

Variáveis: process_id(string uuid), node_id(string uuid), (node_name: string)

Exemplo: ```## emitter.emit('PROCESS.EDGE.NODE_RESULT_ERROR', `NODE RESULT FROM NODE ID [${this.next_node._spec.id}] IS A INVALID JSON ON PID [${this.id}]`, {```

## PROCESS.END_NODE_RUN

Evento que ocorre quando se chega no nó final

Mensagem: END NODE RUN STATUS [${node_result.status}]

Variáveis: process_id(string uuid), node_name(string) e node_status(string)

Exemplo: ```emitter.emit('PROCESS.END_NODE_RUN',`      END NODE RUN STATUS [${node_result.status}]`, {```

## PROCESS_STATE.NEW

Evento que ocorre quando há um novo estado em um determinado processo

Mensagem: NEW STATE ON PID [${p_lock.id}] PS [${this.state.id}]

Variáveis: process_id e process_state_id(string uuid)

Exemplo: ```emitter.emit('PROCESS_STATE.NEW',`      NEW STATE ON PID [${p_lock.id}] PS [${this.state.id}]`, {```

## PROCESS.AM.CREATING

Evento que ocorre quando há a criação de um novo ACTIVITY MANAGER em um determinado processo

Mensagem: CREATING NEW ACTIVITY MANAGER ON PID [${p_lock.id}]

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.AM.CREATING',`      CREATING NEW ACTIVITY MANAGER ON PID [${p_lock.id}]`, {```

## PROCESS.AM.NEW

Evento que ocorre quando há um novo ACITIVITY MANAGER em um determinado processo

Mensagem: NEW ACTIVITY MANAGER ON PID [${p_lock.id}] AM [${am.id}]

Variáveis: process_id e activity_manager_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.AM.NEW',`      NEW ACTIVITY MANAGER ON PID [${p_lock.id}] AM [${am.id}]`, {```

## PROCESS.SUBPROCESS.CREATING

Evento que ocorre na criação de um novo SUBPROCESS em um determinado processo

Mensagem: CREATING NEW SUBPROCESS ON PID [${p_lock.id}]

Variáveis: process_id (string uuid), sub_workflow_name(string)

Exemplo: ```emitter.emit('PROCESS.SUBPROCESS.CREATING',`      CREATING NEW SUBPROCESS ON PID [${p_lock.id}]`, { process_id: p_lock.id, sub_workflow_name: node_result.workflow_name });```

## PROCESS.SUBPROCESS.NEW

Evento que ocorre quando há um novo SUBPROCESS em um determinado processo

Mensagem: NEW SUBPROCESS ON PID [${p_lock.id}] SPID [${child_process.id}]

Variáveis: process_id e sub_process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.SUBPROCESS.NEW',`      NEW SUBPROCESS ON PID [${p_lock.id}] SPID [${child_process.id}]`, {```

## PROCESS.FINISHED

Evento que ocorre quando um determinado processo é finalizado

Mensagem: FINISHED PID [${p_lock.id}]

Variáveis: process_id (string uuid) e result_data (string)

Exemplo: ```emitter.emit('PROCESS.FINISHED',`      FINISHED PID [${p_lock.id}]`, {```

## PROCESS.SUBPROCESS.UPSTREAM

Evento que ocorre quando há um SUBPROCESS UPSTREAM em um determinado processo

Mensagem: SUBPROCESS UPSTREAM ON PID [${p_lock.id}] PPID [${result_state.bag.parent_process_data.id}]`

Variáveis: process_id (string uuid) e parent_process_id (string uuid)

Exemplo: ```emitter.emit('PROCESS.SUBPROCESS.UPSTREAM',`      SUBPROCESS UPSTREAM ON PID [${p_lock.id}] PPID [${result_state.bag.parent_process_data.id}]`, {```

## NODE.RESULT_ERROR

Evento que ocorre quando há um erro ao transformar o nó em um JSON

Mensagem: ERROR AT JSON PARSE NODE

Variáveis: error(string)

Exemplo: ```emitter.emit('NODE.RESULT_ERROR',`ERROR AT JSON PARSE NODE`, {```

## EXECUTION_LOOP.START

Evento que ocorre quando há a execução de um loop em um determinado processo

Mensagem: CALLED EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]

Variáveis: process_id e engine_id (string uuid) e status (string)

Exemplo: ```emitter.emit('EXECUTION_LOOP.START',`CALLED EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]`,{```

## EXECUTION_LOOP.TRANSACTION

Evento que ocorre quando há o início de uma transação de loop em um determinado processo

Mensagem: BEGIN TRANSACTION FOR PID [${this.id}] - ENGINE_ID [${ENGINE_ID}]

Variáveis: process_id e engine_id (string uuid)

Exemplo: ```emitter.emit('EXECUTION_LOOP.TRANSACTION',`    BEGIN TRANSACTION FOR PID [${this.id}] - ENGINE_ID [${ENGINE_ID}]`,{```

## EXECUTION_LOOP.COMMIT

??Perguntar ao Gustavo??

Mensagem: COMMIT ON EXEC PID [${this.id}] ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]

Variáveis: process_id e engine_id(string uuid)

Exemplo: ```emitter.emit('EXECUTION_LOOP.COMMIT',`      COMMIT ON EXEC PID [${this.id}] ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]`,{```

## PROCESS.STEP_CREATED

??Perguntar ao Gustavo??

Mensagem: ""

Variáveis: ""

Exemplo: ```emit('PROCESS.STEP_CREATED','',{});```

## EXECUTION_LOOP.ROLLBACK

Evento que ocorre quando há uma restauração em um determinado processo executado

Mensagem: ROLLBACK ON EXEC PID [${this.id}]  ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]

Variáveis: process_id e engine_id(string uuid)

Exemplo: ```emitter.emit('EXECUTION_LOOP.ROLLBACK',`      ROLLBACK ON EXEC PID [${this.id}]  ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]`,{```

## EXECUTION_LOOP.END

Evento que ocorre quando há o fim de um loop em um determinado processo

Mensagem: END LOOP PID [${this.id}] STATUS [${this.status}] EXECUTION SUCCESS [${execution_success}]

Variáveis: process_id e engine_id(string uuid), status(string)

Exemplo: ```emitter.emit('EXECUTION_LOOP.END',`  END LOOP PID [${this.id}] STATUS [${this.status}] EXECUTION SUCCESS [${execution_success}]`,{```

## PROCESS.ACTIVITY_MANAGER.CREATED

Evento que ocorre quando há uma notificação no ACTIVITY MANAGER

Mensagem: ACTIVITY MANAGER NOTIFY CREATED ON PID [${this.id}]

Variáveis: process, activity_manager e timer (pesquisar depois os tipos)

Exemplo: ```emitter.emit("PROCESS.ACTIVITY_MANAGER.CREATED",`ACTIVITY MANAGER NOTIFY CREATED ON PID [${this.id}]`, {```

## EXECUTION_LOOP.LEFT

Evento que retorna a saída da execução de um loop

Mensagem: LEFT EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]

Variáveis: process_id e engine_id(string uuid) e status (string)

Exemplo: ```emitter.emit('EXECUTION_LOOP.LEFT',`LEFT EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]`,{```

## PROCESS.TIMEOUT

Evento que ocorre quando há um timeout em um determinado processo

Variáveis: process_id e timer_id (string uuid)

Mensagem: TIMEOUT ON PID [${this.id}] TIMER [${timer.id}]



Exemplo: ```emitter.emit('PROCESS.TIMEOUT',`TIMEOUT ON PID [${this.id}] TIMER [${timer.id}]`,{```

## PROCESS.TIMEOUT.BAIL

Evento que ocorre quando há impossibilidade de expirar um determinado e ativo processo

Mensagem: PROCESS.TIMEOUT.BAIL',`  CANNOT EXPIRE RUNNING PROCESS PID [${this.id}]

Variáveis: process_id e timer_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.TIMEOUT.BAIL',`  CANNOT EXPIRE RUNNING PROCESS PID [${this.id}]`,{```

## PROCESS.RESULT_SCHEMA.ERROR

Evento que ocorre quando há um problema no Schema do processo

Mensagem: resultSchemaError

Variáveis: process_id(string uuid) e message(string)

Exemplo: ```emitter.emit('PROCESS.RESULT_SCHEMA.ERROR', resultSchemaError, {```

## ENGINE.ERROR

Evento que ocorre quando há um erro na engine

Mensagem: ERROR AT ENGINE

Variáveis: error(string)

Exemplo: ```emitter.emit('ENGINE.ERROR', 'ERROR AT ENGINE', { error: e });```

## ENGINE.HEARTBEAT

Evento que rocorre quando há um heartbeat

Mensagem: HEARTBEAT @ [${new Date().toISOString()}]

Variáveis: 

Exemplo: ```emitter.emit('ENGINE.HEARTBEAT',`HEARTBEAT @ [${new Date().toISOString()}]`);```

## ENGINE.FETCHING_TIMERS

Evento que retorna os timers buscados em meio aos heartbeats

Mensagem: FETCHING TIMERS ON HEARTBEAT BATCH [${TIMER_BATCH}]

Variáveis: 

Exemplo: ```emitter.emit('ENGINE.FETCHING_TIMERS',`  FETCHING TIMERS ON HEARTBEAT BATCH [${TIMER_BATCH}]`);```

## ENGINE.TIMERS

Evento que ocorre quando há uma contagem de timers nos heartbeats

Mensagem: FETCHED [${locked_timers.length}] TIMERS ON HEARTBEAT`

Variáveis: timers (number)

Exemplo: ```emitter.emit('ENGINE.TIMERS',`  FETCHED [${locked_timers.length}] TIMERS ON HEARTBEAT`,{ timers: locked_timers.length });```

## ENGINE.FIRING_TIMER

Evento que ocorre quando  há um timer 'firing' em um heartbeat

Mensagem: FIRING TIMER [${t_lock.id}] ON HEARTBEAT

Exemplo: ```emitter.emit('ENGINE.FIRING_TIMER',`  FIRING TIMER [${t_lock.id}] ON HEARTBEAT`, { timer_id: t_lock.id });```

## ENGINE.ORPHANS_FETCHING

Evento que ocorre na busca dos processos orfãos em meio aos heartbeats

Mensagem: FETCHING ORPHAN PROCESSES ON HEARTBEAT BATCH [${ORPHAN_BATCH}]

Variáveis:

Exemplo: ```emitter.emit('ENGINE.ORPHANS_FETCHING',`FETCHING ORPHAN PROCESSES ON HEARTBEAT BATCH [${ORPHAN_BATCH}]`);```

## ENGINE.ORPHANS_FETCHED

Evento ocorre quando a busca dos processos orfãos em meio aos heartbeats termina

Mensagem: FETCHED [${locked_orphans.length}] ORPHANS ON HEARTBEAT

Variáveis: orphans(number)

Exemplo: ```emitter.emit('ENGINE.ORPHANS_FETCHED',`  FETCHED [${locked_orphans.length}] ORPHANS ON HEARTBEAT`,{ orphans: locked_orphans.length });```

## ENGINE.ORPHAN_FETCHING

Evento que ocorre na busca de um determinado processo orfão no heartbeat

Mensagem: FETCHING PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT

Variáveis: process_id(string uuid)

Exemplo: ```emitter.emit('ENGINE.ORPHAN_FETCHING',`  FETCHING PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT`, { process_id: orphan.id });```

## ENGINE.ORPHANS.ERROR

Evento que ocorre quando há erros ao buscar processos orfãos no heartbeat

Mensagem: ERROR FETCHING ORPHANS ON HEARTBEAT

Variável: error(string)

Exemplo: ```emitter.emit('ENGINE.ORPHANS.ERROR',"  ERROR FETCHING ORPHANS ON HEARTBEAT", { error: e });```

## ENGINE.ORPHAN_FETCHED

Evento que ocorre na busca um determinado processo orfão

Mensagem: FETCHED PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT

Variáveis: process_id(string)

Exemplo: ```emitter.emit('ENGINE.ORPHAN_FETCHED',`  FETCHED PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT`, { process_id: orphan.id });```

## ENGINE.ORPHAN.CONTINUE

Evento que retorna a continuação de um determinado processo orfão e seu estado no heartbeat

Mensagem: START CONTINUE ORPHAN PID [${process.id}] AND STATE [${process.state.id}] ON HEARTBEAT

Variáveis: process_id e process_state_id(string uuid)

Exemplo: ```emitter.emit('ENGINE.ORPHAN.CONTINUE',`    START CONTINUE ORPHAN PID [${process.id}] AND STATE [${process.state.id}] ON HEARTBEAT`, {```

## ENGINE.HEART.ERROR

Evento que ocorre quando há um erro em um determinado engine

Mensagem: HEART FAILURE @ ENGINE_ID [${ENGINE_ID}]

Variáveis: engine_id(string uuid) e error(string)

Exemplo: ```emitter.emit('ENGINE.HEART.ERROR',`HEART FAILURE @ ENGINE_ID [${ENGINE_ID}]`, {```

## ENGINE.NEXT

Evento que ocorre no próximo heartbeat

Mensagem: NEXT HEARTBEAT SET

Variáveis: 

Exemplo: ```emitter.emit('ENGINE.NEXT',"NEXT HEARTBEAT SET")```

## PROCESS.EDGE.CREATED

Evento que ocorre quando há um PROCESS.EDGE.CREATED

Mensagem: CREATED PROCESS OF [${workflow.name}] PID [${created_process.id}]

Variáveis: workflow_name(string) process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.EDGE.CREATED',`CREATED PROCESS OF [${workflow.name}] PID [${created_process.id}]`, {workflow_name: workflow.name process_id: created_process.id});```

## PROCESS.EDGE.ABORTED

Evento que ocorre quando um processo é abortado

Mensagem: PROCESS ABORTED [${process_id}] OF [${abort_result[0].value.workflow_name}]

Variáveis: workflow_name(string) e process_id(string uuid)

Exemplo: ```emitter.emit('PROCESS.EDGE.ABORTED',`PROCESS ABORTED [${process_id}] OF [${abort_result[0].value.workflow_name}]`, {workflow_name: abort_result[0].value.workflow_name, process_id: process_id});```
