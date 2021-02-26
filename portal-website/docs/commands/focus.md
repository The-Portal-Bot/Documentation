---
id: command_focus
title: focus
sidebar_label: focus
---

|                       Description                       |      Argument       | Accessible | Cooldown |
| :-----------------------------------------------------: | :-----------------: | :--------: | :------: |
| Creates focus channel for you and your requested member | __!username @time__ |  `admin`   |  `none`  |

:::note

Note that if no time is given your focued channel will have a 5 minute life

:::

## Examples

* Lets say you want to talk with a member called Mallory with id (228666893068795905), you would type
    1. You would have to request a session as follows
        ```bash
        ./focus 228666893068795905
        ```
        or
        ```bash
        ./focus Mallory
        ```


:::important

In case two members have the same name, it will select the first one it spots

:::

    1. Mallory will be asked if shed want to talk with you.
    2. If she replies with yes, a new channel will be made called `focus 5'` (5 representing the time in minues) with maximum capacity of 2 and you will both be moved to it
    3. After the time has ended, you will be moved to your previous channel