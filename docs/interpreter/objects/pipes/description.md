---
id: description
title: Pipes
sidebar_label: Description
---

| prefix |                                      Description                                      | Format  | Example &g.locale\|upperCase |
| :----: | :-----------------------------------------------------------------------------------: | :-----: | :--------------------------: |
|   \|   | _Pipes are mini functions you can pass text or Variables to manipulate their outcome_ | \| pipe |             `GR`             |

:::info

You can chain pipes together, for example `john|consonants|upperCase` would display **JHN**

:::

## List of Pipes

### [acronym](/docs/interpreter/objects/pipes/detailed/acronym)

|            Description             |  Type  |
| :--------------------------------: | :----: |
| _returns the acronym of the input_ | string |

### [camelCase](/docs/interpreter/objects/pipes/detailed/camelCase)

|             Description             |  Type  |
| :---------------------------------: | :----: |
| _returns an camelcase of the input_ | string |

### [capitalise](/docs/interpreter/objects/pipes/detailed/capitalise)

|                                     Description                                      |  Type  |
| :----------------------------------------------------------------------------------: | :----: |
| _returns the input capitalised, the first letter capitalcase and the rest lowercase_ | string |

### [consonants](/docs/interpreter/objects/pipes/detailed/consonants)

|              Description              |  Type  |
| :-----------------------------------: | :----: |
| _returns the consonants of the input_ | string |

### [decapitalise](/docs/interpreter/objects/pipes/detailed/decapitalise)

|                                      Description                                       |  Type  |
| :------------------------------------------------------------------------------------: | :----: |
| _returns the input decapitalised, the first letter lowercase and the rest capitalcase_ | string |

### [length](/docs/interpreter/objects/pipes/detailed/length)

|         Description          |  Type  |
| :--------------------------: | :----: |
| _returns the length of text_ | number |

### [lowerCase](/docs/interpreter/objects/pipes/detailed/lowerCase)

|             Description             |  Type  |
| :---------------------------------: | :----: |
| _returns an lowercase of the input_ | string |

### [populous_count](/docs/interpreter/objects/pipes/detailed/populous_count)

|                               Description                               |  Type  |
| :---------------------------------------------------------------------: | :----: |
| _returns the number of times the most common element was found in list_ | number |

### [populous](/docs/interpreter/objects/pipes/detailed/populous)

|                      Description                      | Type |
| :---------------------------------------------------: | :--: |
| _returns the name of the most common element in list_ | list |

### [snakeCase](/docs/interpreter/objects/pipes/detailed/snakeCase)

|             Description             |  Type  |
| :---------------------------------: | :----: |
| _returns an snakecase of the input_ | string |

### [souvlakiCase](/docs/interpreter/objects/pipes/detailed/souvlakiCase)

|              Description               |  Type  |
| :------------------------------------: | :----: |
| _returns an souvlakicase of the input_ | string |

### [titleCase](/docs/interpreter/objects/pipes/detailed/titleCase)

|             Description             |  Type  |
| :---------------------------------: | :----: |
| _returns an titlecase of the input_ | string |

### [upperCase](/docs/interpreter/objects/pipes/detailed/upperCase)

|             Description             |  Type  |
| :---------------------------------: | :----: |
| _returns an uppercase of the input_ | string |

### [vowels](/docs/interpreter/objects/pipes/detailed/vowels)

|            Description            |  Type  |
| :-------------------------------: | :----: |
| _returns the vowels of the input_ | string |

### [word](/docs/interpreter/objects/pipes/detailed/words)

|           Description           |  Type  |
| :-----------------------------: | :----: |
| _returns \# words of the input_ | string |
