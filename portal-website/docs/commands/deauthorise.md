---
id: command_deauthorise
title: deauthorise
sidebar_label: deauthorise
---

|         Description          |        Argument         | Accessible | Cooldown |
| :--------------------------: | :---------------------: | :--------: | :------: |
| Deauthorise a role or member | __!role or !member\_id__ |  `admin`   |  `none`  |

## Examples

* Lets say you want to deauthorise member Mallory with id (228666893068795905), you would type
    ```bash
    ./deauthorise 228666893068795905
    ```

:::important

You cant deauthorise with name as someone could change their name to get deauthorised

:::

* Lets say you want to add role _Admins_ to deauthorised roles, you would type
    ```bash
    ./deauthorise Admins
    ```