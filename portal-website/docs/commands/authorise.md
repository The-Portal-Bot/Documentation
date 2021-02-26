---
id: command_authorise
title: authorise
sidebar_label: authorise
---

|                           Description                            |        Argument         | Accessible | Cooldown |
| :--------------------------------------------------------------: | :---------------------: | :--------: | :------: |
| Authorise a role or member, adding <br />them to authorised list | __!role or !member\_id__ |  `admin`   |  `none`  |

## Examples

* Lets say you want to authorise a member called Mallory with id (228666893068795905), you would type
    ```bash
    ./authorise 228666893068795905
    ```

:::important

You cant authorise with name as someone could change their name to get authorised

:::

* Lets say you want to add role _Admins_ to authorised roles, you would type
    ```bash
    ./authorise Admins
    ```