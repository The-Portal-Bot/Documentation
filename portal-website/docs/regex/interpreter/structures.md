---
id: structures
title: Structures
sidebar_label: Structures
---

### Structures

| prefix | sufix |                 Description                  |
| :----: | :---: | :------------------------------------------: |
|   {{   |  }}   | Structures are conditional flow manipulators |

### List of Attributes

| Attributes | Description           |
| :--------- | :-------------------- |
| `if`       | conditional statement |

#### Usage

```json 
{{
    "if": "@status_list", "is": "===", "with": "CS:GO",
    "yes": "$member_count/5", "no": "is not CS"
}}
```

will become
```
If you're playing CS:GO: 4/5 (if 4 members in channel), if not: is not CS
```
