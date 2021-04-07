---
id: invite
title: invite
sidebar_label: invite
---

|                           Description                           |    Argument    | Accessible |   Cooldown    |
| :-------------------------------------------------------------: | :------------: | :--------: | :-----------: |
| creates an invite link and sends it to you as a private message | **!role_json** |  `admin`   | `1min/member` |

## Examples

- Lets say you want to create a unique invite for 10 uses and age restriction to be above 18 years, you would type

  ```json
  ./invite {
    "temporary": false,
    "maxAge": 18,
    "maxUses": 10,
    "unique": true,
    "reason": "Join the best server !"
  }
  ```

:::note

You do not have to use all options, but you have to use at least one.

:::