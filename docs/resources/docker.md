# DOCKER
Routes for accessing workflow methods

## Version: 1.0.0

### /token

#### POST
##### Summary:

Get valid JWT token

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| x-duration | header | Token duration in seconds | No | integer |
| x-secret | header | Use another JWT secret | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Valid token |

null

### /workflows

#### GET
##### Summary:

Get all workflows for actor

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Workflows for actor |
| 401 |  |

#### POST
##### Summary:

Save workflow

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST. |
| 400 | Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida. |
| 401 |  |

### /workflows/{id}

#### GET
##### Summary:

Fetch workflow by id

##### Description:

Returns a single workflow

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Workflow with desired id found |
| 401 |  |
| 404 | Workflow not found |

#### DELETE
##### Summary:

Delete workflow

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Workflow deleted successfully |
| 401 |  |
| 404 | Workflow not found |

### /workflows/name/{name}

#### GET
##### Summary:

Fetch workflow by name

##### Description:

Returns a single workflow

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Workflow with desired name found |
| 401 |  |
| 404 | Workflow not found |

### /workflows/{id}/status

#### GET
##### Summary:

Fetch process count from status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | workflow_id | Yes | string |
| status | query |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Process count |
| 401 |  |
| 404 | Workflow not found |

### /workflows/{id}/processes

#### GET
##### Summary:

Fetch process list from workflow

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | workflow_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Process list |
| 401 |  |

### /workflows/{id}/create

#### POST
##### Summary:

Create process

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | workflow_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Process created |
| 401 |  |
| 404 | Workflow not found |

### /workflows/name/{name}/create

#### POST
##### Summary:

Create process from workflow name

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Process created |
| 401 |  |
| 404 | Workflow not found |

### /processes/activityManager/{id}

#### GET
##### Summary:

Fetch ActivityManager by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | activity_manager_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | ActivityManager with desired id found |
| 401 |  |
| 404 | Workflow not found |

### /processes/available

#### GET
##### Summary:

Fetch available activities for actor

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| workflow_id | query | Filter by workflow | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Available activities |
| 401 |  |

### /processes/done

#### GET
##### Summary:

Fetch done activities for actor

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| workflow_id | query | Filter by workflow | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Available activities |
| 401 |  |

### /processes/{id}/activity

#### GET
##### Summary:

Fetch available activity for process

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | process_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Available activity |
| 401 |  |

### /processes/{process_id}/commit

#### POST
##### Summary:

Commit activity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| process_id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Activity committed |
| 401 |  |

### /processes/{process_id}/push

#### POST
##### Summary:

Push activity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| process_id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Activity pushed |
| 401 |  |
| 404 | Workflow not found |

### /activity_manager/{activity_manager_id}/submit

#### POST
##### Summary:

Submit activity by ActivityManager id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activity_manager_id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 202 | Activity submitted |
| 401 |  |
| 500 | Activity manager not found or error submitting |

### /processes

#### GET
##### Summary:

Fetch all processes

##### Description:

Returns a single workflow

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| workflow_id | query | Filter by workflow_id | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Process list |
| 401 |  |

### /processes/{id}

#### GET
##### Summary:

Fetch process by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | process_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Workflow with desired id found |
| 401 |  |
| 404 | Process not found |

### /processes/{id}/history

#### GET
##### Summary:

Fetch process state history

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | process_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Process state history |
| 401 |  |
| 404 | Process not found |

### /processes/{id}/run

#### POST
##### Summary:

Run process

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | process_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Process running |
| 401 |  |
| 404 | Process not found |

### /processes/{id}/abort

#### POST
##### Summary:

Abort process

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | process_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Process aborted |
| 401 |  |
| 404 | Process not found |

### /processes/{id}/state

#### POST
##### Summary:

Set process state

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | process_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Process state set |
| 401 |  |
| 404 | Process not found |

### /packages

#### POST
##### Summary:

Save package

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Package saved |
| 400 | Error saving package |
| 401 |  |

### /packages/{id}

#### GET
##### Summary:

Fetch package by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | package_id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Package found |
| 401 |  |
| 404 | Package not found |

#### DELETE
##### Summary:

Delete package

##### Description:

package_id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Package deleted |
| 401 |  |
| 404 | Package not found |

### Models


#### TokenRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actor_id | string |  | No |
| claims | [ string ] |  | No |

#### TokenResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actor_id | string |  | Yes |
| claims | [ string ] |  | Yes |

#### SaveWorkflow

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| description | string |  | No |
| blueprint_spec | object |  | No |

#### Timestamp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Timestamp | string |  |  |

#### Workflows

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Workflows | array |  |  |

#### Workflow

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| description | string |  | No |
| blueprint_spec | [BlueprintSpec](#blueprintspec) |  | No |
| created_at | [Timestamp](#timestamp) |  | No |
| version | integer |  | No |

#### BlueprintSpec

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lanes | [ [Lane](#lane) ] |  | No |
| nodes | [ [Node](#node) ] |  | No |
| prepare | [ string ] |  | No |
| environment | object |  | No |
| requirements | [ string ] |  | No |

#### Lane

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| rule | [  ] |  | No |

#### Node

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| type | string |  | No |
| lane_id | string |  | No |
| parameters | object |  | No |