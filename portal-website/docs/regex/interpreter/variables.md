---
id: variables
title: Variables
sidebar_label: Variables
---

### Description

| prefix |                          Description                          |   Format    |       Example `$status_list`       |
| :----: | :-----------------------------------------------------------: | :---------: | :--------------------------------: |
|   $    | Variables are immutable and live data that return information | `$variable` | `CS:GO`<br />or<br />`CS:GO, Apex` |

## List of Variables
| Variable              | Description                                      |
| :-------------------- | :----------------------------------------------- |
| `#`                   | _number of channel in list_                      |
| `##`                  | _number of channel in list with \#_              |
| `creator_portal`      | _create of portal current voice was spawned_     |
| `creator_voice`       | _creator of voice_                               |
| `date`                | _full date: dd/mm/yyyy_                          |
| `day_number`          | _gets the day number (ex. 01)_                   |
| `day_name`            | _gets the day name (ex. Monday)_                 |
| `month_number`        | _gets the month number (ex. 02)_                 |
| `month_name`          | _gets the month name (ex. Feb)_                  |
| `year`                | _gets the year_                                  |
| `time`                | _full time: hh/mm/ss_                            |
| `hour`                | _gets the hour_                                  |
| `minute`              | _gets the minute_                                |
| `second`              | _gets the second_                                |
| `status_list`         | _list of current member statuses_                |
| `status_count`        | _count of current member statuses_               |
| `status_history`      | _history of all the statuses (work-in-progress)_ |
| `member_list`         | _returns the currently played games_             |
| `member_count`        | _number of members in channel_                   |
| `member_active_count` | _number of members playing_                      |
| `member_with_status`  | _number of member with given status_             |
| `member_history`      | _returns statuses history (work-in-progress)_    |
