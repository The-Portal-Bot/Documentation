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

### [creator_portal](detailed/general/creator_portal)

|                                 Description                                  |  Type  |
| :--------------------------------------------------------------------------: | :----: |
| _The name of the portal channel, the current voice channel was spawned from_ | string |

### [creator_voice](detailed/general/creator_voice)

|    Description     |  Type  |
| :----------------: | :----: |
| _creator of voice_ | string |


### [##](detailed/general/double_slash)

|             Description             |  Type  |
| :---------------------------------: | :----: |
| _number of channel in list with \#_ | string |

### [#](detailed/general/slash)

|         Description         |  Type  |
| :-------------------------: | :----: |
| _number of channel in list_ | string |


## Member

---

### [member_list](detailed/member/member_list)

|             Description              |  Type  |
| :----------------------------------: | :----: |
| _returns the currently played games_ | string |

### [member_count](detailed/member/member_count)

|          Description           |  Type  |
| :----------------------------: | :----: |
| _number of members in channel_ | string |

### [member_active_count](detailed/member/member_active_count)

|         Description         |  Type  |
| :-------------------------: | :----: |
| _number of members playing_ | string |

### [member_with_status](detailed/member/member_with_status)

|             Description              |  Type  |
| :----------------------------------: | :----: |
| _number of member with given status_ | string |

### [member_history](detailed/member/member_history)

|                  Description                  |  Type  |
| :-------------------------------------------: | :----: |
| _returns statuses history (work-in-progress)_ | string |

## Status

---

### [status_list](detailed/status/status_list)

|            Description            |  Type  |
| :-------------------------------: | :----: |
| _list of current member statuses_ | string |

### [status_count](detailed/status/status_count)

|            Description             |  Type  |
| :--------------------------------: | :----: |
| _count of current member statuses_ | string |

### [status_history](detailed/status/status_history)

|                   Description                    |  Type  |
| :----------------------------------------------: | :----: |
| _history of all the statuses (work-in-progress)_ | string |

## Time

---

### [date](detailed/time/date)

|       Description       |  Type  |
| :---------------------: | :----: |
| _full date: dd/mm/yyyy_ | string |

### [day_name](detailed/time/day_name)

|           Description            |  Type  |
| :------------------------------: | :----: |
| _gets the day name (ex. Monday)_ | string |

### [day_number](detailed/time/day_number)

|          Description           |  Type  |
| :----------------------------: | :----: |
| _gets the day number (ex. 01)_ | string |

### [month_name](detailed/time/month_name)

|           Description           |  Type  |
| :-----------------------------: | :----: |
| _gets the month name (ex. Feb)_ | string |

### [month_number](detailed/time/month_number)

|           Description            |  Type  |
| :------------------------------: | :----: |
| _gets the month number (ex. 02)_ | string |

### [year](detailed/time/year)

|   Description   |  Type  |
| :-------------: | :----: |
| _gets the year_ | string |

### [time](detailed/time/time.md)

|      Description      |  Type  |
| :-------------------: | :----: |
| _full time: hh:mm:ss_ | string |

### [hour](detailed/time/hour)

|   Description   |  Type  |
| :-------------: | :----: |
| _gets the hour_ | string |

### [minute](detailed/time/minute)

|    Description    |  Type  |
| :---------------: | :----: |
| _gets the minute_ | string |

### [second](detailed/time/second)

|    Description    |  Type  |
| :---------------: | :----: |
| _gets the second_ | string |
