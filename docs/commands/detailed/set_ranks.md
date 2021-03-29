---
id: set_ranks
title: set_ranks
sidebar_label: set_ranks
---

|                     Description                      | Argument | Accessible | Cooldown |
| :--------------------------------------------------: | :------: | :--------: | :------: |
| Sets roles that will be given when said level reache | **none** |  `admin`   |  `none`  |

## Examples

- Lets say you want to create a new ranking system for your server, you would type

  ```json
  ./set_ranks [
      {
          "level": "10",
          "role": "newbie"
      },
      {
          "level": "100",
          "role": "admin"
      }
  ]
  ```

  This would create a ranking system by which you would be given role `newbie` when reaching level `10` and `admin` at level `100`.Í
