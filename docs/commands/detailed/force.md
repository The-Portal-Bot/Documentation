---
id: force
title: force
sidebar_label: force
---

|                     Description                      | Argument | Accessible |   Cooldown   |
| :--------------------------------------------------: | :------: | :--------: | :----------: |
| Clones current channel in order to force-update name | **none** |  `admin`   | `2min/admin` |

## Examples

- Lets say you want to force update your current session, you would type

  ```bash
  /force
  ```

  This will create a copy of your current channel with an updated name and move all users to it
  _Main reason of usage is when you have exceeded the allowed once per 5 minutes update and want to refresh your channe's name_

:::info

You can force a channel that has up-to 10 members (including bots)

:::