
# TokenRequest
&nbsp;

## Properties
| property | required | type | description | details | example |
| :--- | :---: | :---: | :--- | :--- | :--- |
| actor_id | &nbsp; | string | &nbsp; | &nbsp; | 6844da36-aacf-40e7-aedc-576a51dd9046 |
| claims | &nbsp; | array[] of strings | &nbsp; | &nbsp; | &nbsp; |

# TokenResponse
&nbsp;

## Properties
| property | required | type | description | details | example |
| :--- | :---: | :---: | :--- | :--- | :--- |
| actor_id | Y | string | &nbsp; | &nbsp; | 6844da36-aacf-40e7-aedc-576a51dd9046 |
| claims | Y | array[] of strings | &nbsp; | &nbsp; | &nbsp; |

# SaveWorkflow
&nbsp;

## Properties
| property | required | type | description | details | example |
| :--- | :---: | :---: | :--- | :--- | :--- |
| name | &nbsp; | string | &nbsp; | &nbsp; | Lorem Ipsun |
| description | &nbsp; | string | &nbsp; | &nbsp; | Description Test |
| blueprint_spec | &nbsp; | object | &nbsp; | &nbsp; | &nbsp; |

# Workflow
&nbsp;

## Properties
| property | required | type | description | details | example |
| :--- | :---: | :---: | :--- | :--- | :--- |
| id | &nbsp; | string | &nbsp; | &nbsp; | dd349511-3b6b-4271-8a0b-69e47d34c1e4 |
| name | &nbsp; | string | &nbsp; | &nbsp; | Example workflow |
| description | &nbsp; | string | &nbsp; | &nbsp; | Description of what the workflow does |
| blueprint_spec | &nbsp; | BlueprintSpec | &nbsp; | &nbsp; | &nbsp; |
| created_at | &nbsp; | Timestamp | &nbsp; | &nbsp; | &nbsp; |
| version | &nbsp; | integer | &nbsp; | &nbsp; | 1 |

# BlueprintSpec
&nbsp;

## Properties
| property | required | type | description | details | example |
| :--- | :---: | :---: | :--- | :--- | :--- |
| lanes | &nbsp; | array[] of Lane | &nbsp; | &nbsp; | &nbsp; |
| nodes | &nbsp; | array[] of Node | &nbsp; | &nbsp; | &nbsp; |
| prepare | &nbsp; | array[] of strings | &nbsp; | &nbsp; | &nbsp; |
| environment | &nbsp; | object | &nbsp; | &nbsp; | &nbsp; |
| requirements | &nbsp; | array[] of strings | &nbsp; | &nbsp; | &nbsp; |

# Lane
&nbsp;

## Properties
| property | required | type | description | details | example |
| :--- | :---: | :---: | :--- | :--- | :--- |
| id | &nbsp; | string | &nbsp; | &nbsp; | 1 |
| name | &nbsp; | string | &nbsp; | &nbsp; | the_only_lane |
| rule | &nbsp; | array[] of  | &nbsp; | &nbsp; | &nbsp; |

# Node
&nbsp;

## Properties
| property | required | type | description | details | example |
| :--- | :---: | :---: | :--- | :--- | :--- |
| id | &nbsp; | string | &nbsp; | &nbsp; | 1 |
| name | &nbsp; | string | &nbsp; | &nbsp; | Start Node |
| type | &nbsp; | string | &nbsp; | &nbsp; | Start |
| lane_id | &nbsp; | string | &nbsp; | &nbsp; | 1 |
| parameters | &nbsp; | object | &nbsp; | &nbsp; | &nbsp; |
