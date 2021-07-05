# Workflow

Descrição:


JSON Schema

``` json
{
    "type": "object",
    "properties": {
        "name": { "type": "string" },
        "description": { "type": "string" },
        "blueprint_spec": { 
            "type": "object",
            "properties": {
                "requirements": { 
                    "type": "array",
                    "items": { "type": "string" }
                },
                "prepare": { 
                    "type": "array",
                    "items": { "type": "string" }
                },
                "environment": { "type": "object" },
                "parameters": { "type": "object" },
                "lanes": {
                    "type": "array",
                    "items": { "type": "object" }
                },
                "nodes": {
                    "type": "array",
                    "items": { "type": "object" }
                }
            }
        }
    }
}
```