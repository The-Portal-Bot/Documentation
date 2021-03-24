---
id: description
title: Variable
sidebar_label: Description
---

| prefix |                           Description                           |   Format    |       Example `$status_list`       |
| :----: | :-------------------------------------------------------------: | :---------: | :--------------------------------: |
|   $    | _Variables are immutable and live data that return information_ | `$variable` | `CS:GO`<br />or<br />`CS:GO, Apex` |

## List of Variables

## General

---

### [creator_portal](/docs/interpreter/objects/variables/detailed/general/creator_portal)

|                                 Description                                  |  Type  |
| :--------------------------------------------------------------------------: | :----: |
| _The name of the portal channel, the current voice channel was spawned from_ | string |

### [creator_voice](/docs/interpreter/objects/variables/detailed/general/creator_voice)

|    Description     |  Type  |
| :----------------: | :----: |
| _creator of voice_ | string |


### [##](/docs/interpreter/objects/variables/detailed/general/double_slash)

|             Description             |  Type  |
| :---------------------------------: | :----: |
| _number of channel in list with \#_ | string |

### [#](/docs/interpreter/objects/variables/detailed/general/slash)

|         Description         |  Type  |
| :-------------------------: | :----: |
| _number of channel in list_ | string |


## Member

---

### [member_list](/docs/interpreter/objects/variables/detailed/member/member_list)

|             Description              |  Type  |
| :----------------------------------: | :----: |
| _returns the currently played games_ | string |

### [member_count](/docs/interpreter/objects/variables/detailed/member/member_count)

|          Description           |  Type  |
| :----------------------------: | :----: |
| _number of members in channel_ | string |

### [member_active_count](/docs/interpreter/objects/variables/detailed/member/member_active_count)

|         Description         |  Type  |
| :-------------------------: | :----: |
| _number of members playing_ | string |

### [member_with_status](/docs/interpreter/objects/variables/detailed/member/member_with_status)

|             Description              |  Type  |
| :----------------------------------: | :----: |
| _number of member with given status_ | string |

### [member_history](/docs/interpreter/objects/variables/detailed/member/member_history)

|                  Description                  |  Type  |
| :-------------------------------------------: | :----: |
| _returns statuses history (work-in-progress)_ | string |

## Status

---

### [status_list](/docs/interpreter/objects/variables/detailed/status/status_list)

|            Description            |  Type  |
| :-------------------------------: | :----: |
| _list of current member statuses_ | string |

### [status_count](/docs/interpreter/objects/variables/detailed/status/status_count)

|            Description             |  Type  |
| :--------------------------------: | :----: |
| _count of current member statuses_ | string |

### [status_history](/docs/interpreter/objects/variables/detailed/status/status_history)

|                   Description                    |  Type  |
| :----------------------------------------------: | :----: |
| _history of all the statuses (work-in-progress)_ | string |

## Time

---

### [date](/docs/interpreter/objects/variables/detailed/time/date)

|       Description       |  Type  |
| :---------------------: | :----: |
| _full date: dd/mm/yyyy_ | string |

### [day_name](/docs/interpreter/objects/variables/detailed/time/day_name)

|           Description            |  Type  |
| :------------------------------: | :----: |
| _gets the day name (ex. Monday)_ | string |

### [day_number](/docs/interpreter/objects/variables/detailed/time/day_number)

|          Description           |  Type  |
| :----------------------------: | :----: |
| _gets the day number (ex. 01)_ | string |

### [month_name](/docs/interpreter/objects/variables/detailed/time/month_name)

|           Description           |  Type  |
| :-----------------------------: | :----: |
| _gets the month name (ex. Feb)_ | string |

### [month_number](/docs/interpreter/objects/variables/detailed/time/month_number)

|           Description            |  Type  |
| :------------------------------: | :----: |
| _gets the month number (ex. 02)_ | string |

### [year](/docs/interpreter/objects/variables/detailed/time/year)

|   Description   |  Type  |
| :-------------: | :----: |
| _gets the year_ | string |

### [time](/docs/interpreter/objects/variables/detailed/time/time)

|      Description      |  Type  |
| :-------------------: | :----: |
| _full time: hh:mm:ss_ | string |

### [hour](/docs/interpreter/objects/variables/detailed/time/hour)

|   Description   |  Type  |
| :-------------: | :----: |
| _gets the hour_ | string |

### [minute](/docs/interpreter/objects/variables/detailed/time/minute)

|    Description    |  Type  |
| :---------------: | :----: |
| _gets the minute_ | string |

### [second](/docs/interpreter/objects/variables/detailed/time/second)

|    Description    |  Type  |
| :---------------: | :----: |
| _gets the second_ | string |
