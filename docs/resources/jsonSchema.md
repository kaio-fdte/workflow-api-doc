# JSON SCHEMA


> Version 1.0.0

---


Routes for accessing workflow methods



## Path Table

| Method | Path | Description |
| --- | --- | --- | --- |
| [POST](# Get valid JWT token) | /token | Get valid JWT token |
| [GET](# Get all workflows for actor) | /workflows | Get all workflows for actor |
| [POST](# Save workflow) | /workflows | Save workflow |
| [GET](# Fetch workflow by id) | /workflows/{id} | Fetch workflow by id |
| [DELETE](# Delete workflow) | /workflows/{id} | Delete workflow |
| [GET](# Fetch workflow by name) | /workflows/name/{name} | Fetch workflow by name |
| [GET](# Fetch process count from status) | /workflows/{id}/status | Fetch process count from status |
| [GET](# Fetch process list from workflow) | /workflows/{id}/processes | Fetch process list from workflow |
| [POST](# Create process) | /workflows/{id}/create | Create process |
| [POST](# Create process from workflow name) | /workflows/name/{name}/create | Create process from workflow name |
| [GET](# Fetch ActivityManager by id) | /processes/activityManager/{id} | Fetch ActivityManager by id |
| [GET](# Fetch available activities for actor) | /processes/available | Fetch available activities for actor |
| [GET](# Fetch done activities for actor) | /processes/done | Fetch done activities for actor |
| [GET](# Fetch available activity for process) | /processes/{id}/activity | Fetch available activity for process |
| [POST](# Commit activity) | /processes/{process_id}/commit | Commit activity |
| [POST](# Push activity) | /processes/{process_id}/push | Push activity |
| [POST](# Submit activity by ActivityManager id) | /activity_manager/{activity_manager_id}/submit | Submit activity by ActivityManager id |
| [GET](# Fetch all processes) | /processes | Fetch all processes |
| [GET](# Fetch process by id) | /processes/{id} | Fetch process by id |
| [GET](# Fetch process state history) | /processes/{id}/history | Fetch process state history |
| [POST](# Run process) | /processes/{id}/run | Run process |
| [POST](# Abort process) | /processes/{id}/abort | Abort process |
| [POST](# Set process state) | /processes/{id}/state | Set process state |
| [POST](# Save package) | /packages | Save package |
| [GET](# Fetch package by id) | /packages/{id} | Fetch package by id |
| [DELETE](# Delete package) | /packages/{id} | Delete package |



## Path Details

#### Get valid JWT token
`POST /token`

##### ↣ Parameter

- `x-duration`  in header   
  Token duration in seconds
- `x-secret`  in header   
  Use another JWT secret


##### ⇨ Request Body

```
{
  "actor_id": <string>
[    "claims": <string>, ..]
}
```



##### ⇦ Response

```json
{
  "actor_id": <string>
[    "claims": <string>, ..]
}
```




#### Get all workflows for actor
`GET /workflows`

##### ⇦ Response

```json
[{
    "id": <string>
    "name": <string>
    "description": <string>
{
[{
          "id": <string>
          "name": <string>
[            "rule": <undefined>, ..]
}, ..]
[{
          "id": <string>
          "name": <string>
          "type": <string>
          "lane_id": <string>
{
            "input_schema": <object>
}
}, ..]
[        "prepare": <string>, ..]
      "environment": <object>
[        "requirements": <string>, ..]
}
    "created_at": <string>
    "version": <integer>
}, ..]
```




#### Save workflow
`POST /workflows`

##### ⇨ Request Body

```
{
  "name": <string>
  "description": <string>
{
    "id": <string>
    "name": <string>
    "description": <string>
}
}
```



##### ⇦ Response

```json
{
  "workflow_id": <string>
  "workflow_url": <string>
}
```




#### Fetch workflow by id
`GET /workflows/{id}`

##### ↣ Parameter

- `id`  in path   
  undefined (required)


##### ⇦ Response

```json
{
  "id": <string>
  "name": <string>
  "description": <string>
{
[{
        "id": <string>
        "name": <string>
[          "rule": <undefined>, ..]
}, ..]
[{
        "id": <string>
        "name": <string>
        "type": <string>
        "lane_id": <string>
{
          "input_schema": <object>
}
}, ..]
[      "prepare": <string>, ..]
    "environment": <object>
[      "requirements": <string>, ..]
}
  "created_at": <string>
  "version": <integer>
}
```




#### Delete workflow
`DELETE /workflows/{id}`

##### ↣ Parameter

- `id`  in path   
  undefined (required)



#### Fetch workflow by name
`GET /workflows/name/{name}`

##### ↣ Parameter

- `name`  in path   
  undefined (required)


##### ⇦ Response

```json
{
  "id": <string>
  "name": <string>
  "description": <string>
{
[{
        "id": <string>
        "name": <string>
[          "rule": <undefined>, ..]
}, ..]
[{
        "id": <string>
        "name": <string>
        "type": <string>
        "lane_id": <string>
{
          "input_schema": <object>
}
}, ..]
[      "prepare": <string>, ..]
    "environment": <object>
[      "requirements": <string>, ..]
}
  "created_at": <string>
  "version": <integer>
}
```




#### Fetch process count from status
`GET /workflows/{id}/status`

##### ↣ Parameter

- `id`  in path   
  workflow_id (required)
- `status`  in query   
  undefined (required)


##### ⇦ Response

```json
{
  "count": <integer>
}
```




#### Fetch process list from workflow
`GET /workflows/{id}/processes`

##### ↣ Parameter

- `id`  in path   
  workflow_id (required)


##### ⇦ Response

```json
{
  "id": <string>
  "name": <string>
  "description": <string>
{
[{
        "id": <string>
        "name": <string>
[          "rule": <undefined>, ..]
}, ..]
[{
        "id": <string>
        "name": <string>
        "type": <string>
        "lane_id": <string>
{
          "input_schema": <object>
}
}, ..]
[      "prepare": <string>, ..]
    "environment": <object>
[      "requirements": <string>, ..]
}
  "created_at": <string>
  "version": <integer>
}
```




#### Create process
`POST /workflows/{id}/create`

##### ↣ Parameter

- `id`  in path   
  workflow_id (required)


##### ⇨ Request Body

```
<object>
```



##### ⇦ Response

```json
{
  "process_id": <string>
  "process_url": <string>
}
```




#### Create process from workflow name
`POST /workflows/name/{name}/create`

##### ↣ Parameter

- `name`  in path   
  undefined (required)


##### ⇨ Request Body

```
<object>
```



##### ⇦ Response

```json
{
  "process_id": <string>
  "process_url": <string>
}
```




#### Fetch ActivityManager by id
`GET /processes/activityManager/{id}`

##### ↣ Parameter

- `id`  in path   
  activity_manager_id (required)


##### ⇦ Response

```json
"Result": <object>
```




#### Fetch available activities for actor
`GET /processes/available`

##### ↣ Parameter

- `workflow_id`  in query   
  Filter by workflow


##### ⇦ Response

```json
"Result": <object>
```




#### Fetch done activities for actor
`GET /processes/done`

##### ↣ Parameter

- `workflow_id`  in query   
  Filter by workflow


##### ⇦ Response

```json
"Result": <object>
```




#### Fetch available activity for process
`GET /processes/{id}/activity`

##### ↣ Parameter

- `id`  in path   
  process_id (required)


##### ⇦ Response

```json
"Result": <object>
```




#### Commit activity
`POST /processes/{process_id}/commit`

##### ↣ Parameter

- `process_id`  in path   
  undefined (required)


##### ⇨ Request Body

```
<object>
```



##### ⇦ Response

```json
"Result": <object>
```




#### Push activity
`POST /processes/{process_id}/push`

##### ↣ Parameter

- `process_id`  in path   
  undefined (required)


##### ⇨ Request Body

```
<object>
```



##### ⇦ Response

```json
{
  "id": <string>
  "name": <string>
  "description": <string>
{
[{
        "id": <string>
        "name": <string>
[          "rule": <undefined>, ..]
}, ..]
[{
        "id": <string>
        "name": <string>
        "type": <string>
        "lane_id": <string>
{
          "input_schema": <object>
}
}, ..]
[      "prepare": <string>, ..]
    "environment": <object>
[      "requirements": <string>, ..]
}
  "created_at": <string>
  "version": <integer>
}
```




#### Submit activity by ActivityManager id
`POST /activity_manager/{activity_manager_id}/submit`

##### ↣ Parameter

- `activity_manager_id`  in path   
  undefined (required)


##### ⇨ Request Body

```
<object>
```



##### ⇦ Response

```json
{
  "id": <string>
  "name": <string>
  "description": <string>
{
[{
        "id": <string>
        "name": <string>
[          "rule": <undefined>, ..]
}, ..]
[{
        "id": <string>
        "name": <string>
        "type": <string>
        "lane_id": <string>
{
          "input_schema": <object>
}
}, ..]
[      "prepare": <string>, ..]
    "environment": <object>
[      "requirements": <string>, ..]
}
  "created_at": <string>
  "version": <integer>
}
```




#### Fetch all processes
`GET /processes`

##### ↣ Parameter

- `workflow_id`  in query   
  Filter by workflow_id


##### ⇦ Response

```json
"Result": <object>
```




#### Fetch process by id
`GET /processes/{id}`

##### ↣ Parameter

- `id`  in path   
  process_id (required)


##### ⇦ Response

```json
"Result": <object>
```




#### Fetch process state history
`GET /processes/{id}/history`

##### ↣ Parameter

- `id`  in path   
  process_id (required)


##### ⇦ Response

```json
"Result": <object>
```




#### Run process
`POST /processes/{id}/run`

##### ↣ Parameter

- `id`  in path   
  process_id (required)


##### ⇨ Request Body

```
<object>
```



##### ⇦ Response

```json
Process running
```




#### Abort process
`POST /processes/{id}/abort`

##### ↣ Parameter

- `id`  in path   
  process_id (required)


##### ⇦ Response

```json
Process aborted
```




#### Set process state
`POST /processes/{id}/state`

##### ↣ Parameter

- `id`  in path   
  process_id (required)


##### ⇨ Request Body

```
{
  "process_state": <object>
}
```



##### ⇦ Response

```json
Process state set
```




#### Save package
`POST /packages`

##### ⇨ Request Body

```
<object>
```



##### ⇦ Response

```json
{
  "package_id": <string>
  "package_url": <string>
}
```




#### Fetch package by id
`GET /packages/{id}`

##### ↣ Parameter

- `id`  in path   
  package_id (required)


##### ⇦ Response

```json
"Result": <object>
```




#### Delete package
`DELETE /packages/{id}`

##### ↣ Parameter

- `id`  in path   
  undefined (required)






This document was generated by wcs [Open Api To Markdown](https://www.npmjs.com/package/oa3-md) at Mon Jun 28 2021
