---
sidebar_position: 1
---

# MUSTACHE

Nessa parte vamos descobrir quais são os **eventos** disponíveis.

## PROCESS_STATE_LISTENER

Evento que ocorre quando um processo muda seu estado.

Output: "New PROCESS_STATE"

Exemplo: ```emitter.emit('PROCESS_STATE_LISTENER',`NEW PROCESS_STATE`);```

## KNEX.UPDATE_ERROR

Evento que comunica quando não é possível atualizar um objeto.

Exemplo: ```emitter.emit('KNEX.UPDATE_ERROR', 'Unable to update object', { error: e, id: obj_id });```

## KNEX.DELETE_PROCESS_ERROR

Evento que comunica quando não é possível deletar um determinado processo.

Exemplo: ```emitter.emit('KNEX.DELETE_PROCESS_ERROR', `Unable delete Process with PID [${this.id}]`, { error: e, process_id: this.id });```

## KNEX.CREATE_PROCESS_ERROR

Evento que comunica quando não é possível criar um determinado processo.

Exemplo: ```emitter.emit('KNEX.CREATE_PROCESS_ERROR', `Unable to create Process with PID [${this.id}]`, { error: e, process_id: this.id } );```

## KNEX.UPDATE_PROCESS_ERROR

Evento que comunica quando não é possível atualizar um determinado processo.

Exemplo: ```emitter.emit('KNEX.UPDATE_PROCESS_ERROR', `Unable to update Process with PID [${process_id}]`, { error: e, process_id } );```

## REQUESTS.TRACE.START

Evento que que irá mapear as solicitações HTTP realizadas

Exemplo: ```emitter.emit('REQUESTS.TRACE.START',`SETTING TRACEPARENT`, {});```

## REQUESTS.TRACE.OLD

Evento que retorna as solicitações HTTP passadas

Exemplo: ```emitter.emit('REQUESTS.TRACE.OLD',`OLD TRACEPARENT`, { traceparent: headers.traceparent });```

## REQUESTS.TRACE.NEW

Evento que retorna as novas solicitações HTTP???

Exemplo: ```emitter.emit('REQUESTS.TRACE.NEW',`NEW TRACEPARENT`, { traceparent: headers.traceparent });```

## ACTIVITY_MANAGER.COMPLETED

Evento que retorna o gerenciamento de determinadas atividades completadas???

Exemplo: ```emitter.emit("ACTIVITY_MANAGER.COMPLETED", `ACTIVITY MANAGER COMPLETED AMID: [${this.id}]`, {activity_manager: this});```

## ACTIVITY_MANAGER_TIMER.CLEARED

Evento que retorna a limpeza do timer de um determinado gerenciador de atividade

Exemplo: ```emitter.emit('ACTIVITY_MANAGER_TIMER.CLEARED', `CLEARED TIMERS FOR AMID [${this.id}]`,{ activity_manager_id: this.id });```

## ACTIVITY_MANAGER_TIMER.CREATING_NEW

Evento que retorna a criação de um novo timer de gerenciador de atividade

Exemplo: ```emitter.emit('ACTIVITY_MANAGER_TIMER.CREATING_NEW',`      CREATING NEW TIMER ON AMID [${this.id}] `,{ activity_manager_id: this.id });```

## ACTIVITY_MANAGER.NEW_TIMER

Evento que retorna um novo timer para um determinado gerenciador de atividades

Exemplo: ```emitter.emit('ACTIVITY_MANAGER.NEW_TIMER',`      NEW TIMER ON AMID [${this.id}] TIMER [${timer.id}]`,{ activity_manager_id: this.id, timer_id: timer.id });```

## ACTIVITY_MANAGER.TIMEOUT_EXPIRED

Evento que retorna a duração expirada do gerenciador de atividade

Exemplo: ```emitter.emit('ACTIVITY_MANAGER.TIMEOUT_EXPIRED',`TIMEOUT ON AMID [${this.id}] TIMER [${timer.id}]`,{ activity_manager_id: this.id, timer_id: timer.id });```

## ACTIVITY_MANAGER.COMPLETED

Evento que retorna o gerenciador de atividade completado???

Exemplo: ```emitter.emit('ACTIVITY_MANAGER.COMPLETED', `COMPLETED AMID [${this.id}]`, { activity_manager: activity_manager });```

## ACTIVITY_MANAGER_TIMER.CREATING_NEW

Evento que retorna a criação de um novo timer no gerenciador de atividade???

Exemplo: ```emitter.emit('ACTIVITY_MANAGER_TIMER.CREATING_NEW',`      CREATING NEW TIMER ON AMID [${id}]`,{ activity_manager_id: id });```

## BLUEPRINT.UNUSED_VARIABLES

Evento que retorna as variáveis de ambiente que não são usadas

Exemplo: ```emitter.emit('BLUEPRINT.UNUSED_VARIABLES','UNUSED ENVIRONMENT VARIABLES', { nodes: blueprint_env_status.nodes, ambient: blueprint_env_status.ambient } );```

## BLUEPRINT.NON_EXISTENT_VARIABLES

Evento que retorna as variáveis de ambiente não existentes

Exemplo: ```emitter.emit('BLUEPRINT.NON_EXISTENT_VARIABLES','NON EXISTENT ENVIRONMENT VARIABLES', { ambient: blueprint_env_status.ambient } );```

## LANE.EVAL_ERROR

Erro ao avaliar as regras da raia

Exemplo: ```emitter.emit('LANE.EVAL_ERROR', "ERROR WHILE EVALUATING LANE RULE!", { rule: rule_lisp, error: e });```

## NODE.ERROR

Erro em um específico nó

Exemplo: ```emitter.emit('NODE.ERROR',`ERROR AT NID [${this.id}]`, {```

## NODE.START_VALIDATED

Evento que retorna se o nó de início foi validado

Exemplo: ```emitter.emit('NODE.START_VALIDATED','START NODE VALIDATED', { is_valid: is_valid, error: error });```

## PROCESS.RUN

Evento que retorna um determinado processo rodado

Exemplo: ```emitter.emit('PROCESS.RUN',`RUN ON PID [${this.id}]`,{ process_id: this.id });```

## PROCESS.EDGE.ERROR

Evento que retorna os erros de dados de um determinado processo

Exemplo: ```emitter.emit('PROCESS.EDGE.ERROR',`ERROR ON PROCESS PID [${this.id}] DATA [${this.workflow_name}]:[${current_node._spec.name}]`,{ process_id: this.id, workflow_name: this.workflow_name, node_id: current_node._spec.id, node_name: current_node._spec.name });```

## PROCESS.TIMER.CREATING

Evento que retorna a criação de um timer em um determinado processo

Exemplo: ```emitter.emit('PROCESS.TIMER.CREATING',`  CREATING PROCESS TIMER ON PID [${this.id}]`, { process_id: this.id });```

## PROCESS.TIMER.NEW

Evento que retona um novo timer em um determinado processo

Exemplo: ```emitter.emit('PROCESS.TIMER.NEW',`  PROCESS TIMER ON PID [${this.id}] TIMER [${timer.id}]`, { process_id: this.id, timer_id: timer.id });```

## PROCESS.CONTINUE

Evento que retorna a continuação de um processo

Exemplo: ```emitter.emit('PROCESS.CONTINUE',`CONTINUE ON PID [${this.id}]`, { process_id: this.id });```

## PROCESS.RUN_PENDING

Evento que retorna um determinado processo pendente

Exemplo: ```emitter.emit('PROCESS.RUN_PENDING',`RUN PENDING PID [${this.id}]`, { process_id: this.id });```

## PROCESS.EDGE.EXPIRING

Evento que retorna um determinado processo expirado

Exemplo: ```emitter.emit('PROCESS.EDGE.EXPIRING',`EXPIRE PID [${this.id}]`, { process_id: this.id });```

## PROCESS.EDGE.ABORTING

Evento que retorna o aborto de um determinado processo

Exemplo: ```emitter.emit('PROCESS.EDGE.ABORTING',`ABORT PID [${this.id}]`, { process_id: this.id });```

## PROCESS.STATE.SET

Evento que configura o estado de um determinado processo

Exemplo: ```emitter.emit('PROCESS.STATE.SET',`SET STATE ON PID [${this.id}]`, {```

## INNERLOOP.LOCK

Evento que retorna um determinado processo trancado

Exemplo: ```emitter.emit('INNERLOOP.LOCK',`      LOCK PID ${p_lock.id}`,{```

## INNERLOOP.STATE_LOCK

Evento que retorna um estado trancado de um determinado processo

Exemplo: ```emitter.emit('INNERLOOP.STATE_LOCK',`      LOCK PID [${p_lock.id}] PS [${ps_lock.id}]`,{```

## PROCESS.EDGE.NODE_RESULT_ERROR

Evento que retorna que há um erro de JSON em um determinado processo

Exemplo: ```## emitter.emit('PROCESS.EDGE.NODE_RESULT_ERROR', `NODE RESULT FROM NODE ID [${this.next_node._spec.id}] IS A INVALID JSON ON PID [${this.id}]`, {```

## PROCESS.END_NODE_RUN

Evento que retorna o status do nó final

Exemplo: ```emitter.emit('PROCESS.END_NODE_RUN',`      END NODE RUN STATUS [${node_result.status}]`, {```

## PROCESS_STATE.NEW

Evento que retorna um novo estado em um determinado processo

Exemplo: ```emitter.emit('PROCESS_STATE.NEW',`      NEW STATE ON PID [${p_lock.id}] PS [${this.state.id}]`, {```

## PROCESS.AM.CREATING

Evento que retorna a criação de um novo gerenciador de atividade em um determinado processo

Exemplo: ```emitter.emit('PROCESS.AM.CREATING',`      CREATING NEW ACTIVITY MANAGER ON PID [${p_lock.id}]`, {```

## PROCESS.AM.NEW

Evento que retorna um novo gerenciador de atividade em um determinado processo

Exemplo: ```emitter.emit('PROCESS.AM.NEW',`      NEW ACTIVITY MANAGER ON PID [${p_lock.id}] AM [${am.id}]`, {```

## PROCESS.SUBPROCESS.CREATING

Evento que retorna a criação de um novo subprocesso em um determinado processo

Exemplo: ```emitter.emit('PROCESS.SUBPROCESS.CREATING',`      CREATING NEW SUBPROCESS ON PID [${p_lock.id}]`, { process_id: p_lock.id, sub_workflow_name: node_result.workflow_name });```

## PROCESS.SUBPROCESS.NEW

Evento que retorna um novo subprocesso em um determinado processo

Exemplo: ```emitter.emit('PROCESS.SUBPROCESS.NEW',`      NEW SUBPROCESS ON PID [${p_lock.id}] SPID [${child_process.id}]`, {```

## PROCESS.FINISHED

Evento que retorna um determinado processo finalizado

Exemplo: ```emitter.emit('PROCESS.FINISHED',`      FINISHED PID [${p_lock.id}]`, {```

## PROCESS.SUBPROCESS.UPSTREAM

Evento que retorna um upstream em um determinado processo

Exemplo: ```emitter.emit('PROCESS.SUBPROCESS.UPSTREAM',`      SUBPROCESS UPSTREAM ON PID [${p_lock.id}] PPID [${result_state.bag.parent_process_data.id}]`, {```

## NODE.RESULT_ERROR

Evento que retorna um erro ao transformar o nó em um JSON

Exemplo: ```emitter.emit('NODE.RESULT_ERROR',`ERROR AT JSON PARSE NODE`, {```

## EXECUTION_LOOP.START

Evento que retorna a execução de um loop em um determinado processo

Exemplo: ```emitter.emit('EXECUTION_LOOP.START',`CALLED EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]`,{```

## EXECUTION_LOOP.TRANSACTION

Evento que retorna o início de uma transação de loop em um determinado processo

Exemplo: ```emitter.emit('EXECUTION_LOOP.TRANSACTION',`    BEGIN TRANSACTION FOR PID [${this.id}] - ENGINE_ID [${ENGINE_ID}]`,{```

## EXECUTION_LOOP.COMMIT

??Perguntar ao Gustavo??

Exemplo: ```emitter.emit('EXECUTION_LOOP.COMMIT',`      COMMIT ON EXEC PID [${this.id}] ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]`,{```

## PROCESS.STEP_CREATED

??Perguntar ao Gustavo??

Exemplo: ```emit('PROCESS.STEP_CREATED','',{});```

## EXECUTION_LOOP.ROLLBACK

Evento que retorna uma restauração em um determinado processo executado

Exemplo: ```emitter.emit('EXECUTION_LOOP.ROLLBACK',`      ROLLBACK ON EXEC PID [${this.id}]  ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]`,{```

## EXECUTION_LOOP.END

Evento que retorna o fim de um loop em um determinado processo

Exemplo: ```emitter.emit('EXECUTION_LOOP.END',`  END LOOP PID [${this.id}] STATUS [${this.status}] EXECUTION SUCCESS [${execution_success}]`,{```

## NOME DO EVENTO

Evento que retorna uma notificação de um gerenciador de atividade criada em um determinado processo

Exemplo: ```emitter.emit("PROCESS.ACTIVITY_MANAGER.CREATED",`ACTIVITY MANAGER NOTIFY CREATED ON PID [${this.id}]`, {```

## EXECUTION_LOOP.LEFT

Evento que retorna a saída da execução de um loop

Exemplo: ```emitter.emit('EXECUTION_LOOP.LEFT',`LEFT EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]`,{```

## PROCESS.TIMEOUT

Evento que retorna o tempo esgotado de um determinado processo

Exemplo: ```emitter.emit('PROCESS.TIMEOUT',`TIMEOUT ON PID [${this.id}] TIMER [${timer.id}]`,{```

## PROCESS.TIMEOUT.BAIL

Evento que retorna a impossibilidade de expirar um determinado e ativo processo

Exemplo: ```emitter.emit('PROCESS.TIMEOUT.BAIL',`  CANNOT EXPIRE RUNNING PROCESS PID [${this.id}]`,{```

## PROCESS.RESULT_SCHEMA.ERROR

Evento que retorna o erro de um esquema de um determinado processo

Exemplo: ```emitter.emit('PROCESS.RESULT_SCHEMA.ERROR', resultSchemaError, {```

## ENGINE.ERROR

Evento que retorna um erro na engine

Exemplo: ```emitter.emit('ENGINE.ERROR', 'ERROR AT ENGINE', { error: e });```

## ENGINE.HEARTBEAT

Evento que retorna um heartbeat em um determinado momento

Exemplo: ```emitter.emit('ENGINE.HEARTBEAT',`HEARTBEAT @ [${new Date().toISOString()}]`);```

## ENGINE.FETCHING_TIMERS

Evento que retorna os timers buscados em meio aos heartbeats

Exemplo: ```emitter.emit('ENGINE.FETCHING_TIMERS',`  FETCHING TIMERS ON HEARTBEAT BATCH [${TIMER_BATCH}]`);```

## ENGINE.TIMERS

Evento que retorna a quantidade de timers nos heartbeats

Exemplo: ```emitter.emit('ENGINE.TIMERS',`  FETCHED [${locked_timers.length}] TIMERS ON HEARTBEAT`,{ timers: locked_timers.length });```

## ENGINE.FIRING_TIMER

Evento que retorna um timer 'firing' em um heartbeat

Exemplo: ```emitter.emit('ENGINE.FIRING_TIMER',`  FIRING TIMER [${t_lock.id}] ON HEARTBEAT`, { timer_id: t_lock.id });```

## ENGINE.ORPHANS_FETCHING

Evento que retorna que estão buscando os processos orfãos em meio aos heartbeats

Exemplo: ```emitter.emit('ENGINE.ORPHANS_FETCHING',`FETCHING ORPHAN PROCESSES ON HEARTBEAT BATCH [${ORPHAN_BATCH}]`);```

## ENGINE.ORPHANS_FETCHED

Evento que retorna os processos orfãos em meio aos heartbeats

Exemplo: ```emitter.emit('ENGINE.ORPHANS_FETCHED',`  FETCHED [${locked_orphans.length}] ORPHANS ON HEARTBEAT`,{ orphans: locked_orphans.length });```

## ENGINE.ORPHAN_FETCHING

Evento que retorna a busca de um determinado processo orfão no heartbeat

Exemplo: ```emitter.emit('ENGINE.ORPHAN_FETCHING',`  FETCHING PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT`, { process_id: orphan.id });```

## ENGINE.ORPHANS.ERROR

Evento que retorna erros aos buscar processos orfãos no heartbeat

Exemplo: ```emitter.emit('ENGINE.ORPHANS.ERROR',"  ERROR FETCHING ORPHANS ON HEARTBEAT", { error: e });```

## ENGINE.ORPHAN_FETCHED

Evento que retorna um determinado processo orfão

Exemplo: ```emitter.emit('ENGINE.ORPHAN_FETCHED',`  FETCHED PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT`, { process_id: orphan.id });```

## ENGINE.ORPHAN.CONTINUE

Evento que retorna a continuação de um determinado processo orfão e seu estado no heartbeat

Exemplo: ```emitter.emit('ENGINE.ORPHAN.CONTINUE',`    START CONTINUE ORPHAN PID [${process.id}] AND STATE [${process.state.id}] ON HEARTBEAT`, {```

## ENGINE.HEART.ERROR

Evento que retorna um erro em um determinado engine

Exemplo: ```emitter.emit('ENGINE.HEART.ERROR',`HEART FAILURE @ ENGINE_ID [${ENGINE_ID}]`, {```

## ENGINE.NEXT

Evento que retorna o próximo heartbeat

Exemplo: ```emitter.emit('ENGINE.NEXT',"NEXT HEARTBEAT SET")```

## PROCESS.EDGE.CREATED

Evento que retorna o processo criado

Exemplo: ```emitter.emit('PROCESS.EDGE.CREATED',`CREATED PROCESS OF [${workflow.name}] PID [${created_process.id}]`, {workflow_name: workflow.name process_id: created_process.id});```

## PROCESS.EDGE.ABORTED

Evento que retorna um processo abortado

Exemplo: ```emitter.emit('PROCESS.EDGE.ABORTED',`PROCESS ABORTED [${process_id}] OF [${abort_result[0].value.workflow_name}]`, {workflow_name: abort_result[0].value.workflow_name, process_id: process_id});```
