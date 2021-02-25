---
id: interpreter
title: Interpreter
sidebar_label: Interpreter
---

## Description

Text Interpreter is a program used by Portal when asked to generate
a channel's name. For example if you have set your voices name to
`./set v.regex $status_list` portal knows thats `status_list` is a 
variables, as it is proceded by the symbol _$_.
So lets say you are playing Counter Strike you channel's name will be
__CS:GO__.


### [Variables](interpreter/variables)
|  prefix | Description                                                   |     Format     |          Example `$status_list`        |
|:-------:|:-------------------------------------------------------------:|:--------------:| :-------------------------------------:| 
|    $    | Variables are immutable and live data that return information |   `$variable`  |    `CS:GO`<br />or<br />`CS:GO, Apex`  |

### [Attributes](interpreter/attributes)
|  prefix | Description                                                                                                          |     Format     |       Example `@g.locale`  |
|:-------:|:--------------------------------------------------------------------------------------------------------------------:|:--------------:| :-------------------------:| 
|    &    | Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance |  `&attribute`  |              `gr`          |

### [Pipes](interpreter/pipes)
|  prefix | Description                                                                         |     Format     |       Example @g.locale \| upperCase  |
|:-------:|:-----------------------------------------------------------------------------------:|:--------------:| :-------------------------------------:| 
|    \|    | Pipes are mini functions you can pass text or Variables to manipulate their outcome |     \| pipe    |                   `GR`                 |

### [Structures](interpreter/structures)
|  prefix |   sufix  | Description                                  |
|:-------:|:--------:|:--------------------------------------------:|
|    {{   |     }}   | Structures are conditional flow manipulators |

#### Format
```json 
{{
    "if": "string", "is": "string", "with": "string",
    "yes": "string", "no": "string"
}}
```

#### Example
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

### Combined

Combining everything in one naming guideline it would look something like this:<br />
```
$status_list / @g.locale / g.locale | upperCase
```
will become
```
CS:GO / gr / GR
```