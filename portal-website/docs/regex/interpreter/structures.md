---
id: structures
title: Structures
sidebar_label: Structures
---

### Description

| prefix | sufix |                 Description                  |
| :----: | :---: | :------------------------------------------: |
|   {{   |  }}   | Structures are conditional flow manipulators |

#### Format

```json 
{{
    "if": "string", "is": "string", "with": "string",
    "yes": "string", "no": "string"
}}
```

### List of Attributes

| Attributes | Description           | Usage                                                                                           |
| :--------- | :-------------------- | :---------------------------------------------------------------------------------------------- |
| `if`       | conditional statement | `{{ "if": "John", "is": "===", "with": "John", "yes": "same name", "no": "not the same name"}}` |
