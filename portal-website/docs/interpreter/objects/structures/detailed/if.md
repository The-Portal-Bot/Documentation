---
id: if
title: if
sidebar_label: if
---

|                        Description                         |
| :--------------------------------------------------------: |
| _Conditional return, in programming a simple if statement_ |

#### Usage

```json 
{{
    "if": "@status_list", "is": "===", "with": "CS:GO",
    "yes": "$member_count/5", "no": "is not CS"
}}
```
:::info

This is a JSON obsect

:::

will become
```
If you're playing CS:GO: 4/5 (if 4 members in channel), if not: is not CS
```