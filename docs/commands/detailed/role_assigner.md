---
id: role_assigner
title: role_assigner
sidebar_label: role_assigner
---

|                          Description                           |    Argument    | Accessible | Cooldown |
| :------------------------------------------------------------: | :------------: | :--------: | :------: |
| Replies with a message that gives roles when an emote is added | **!role_json** |  `admin`   |  `none`  |

## Examples

- Lets say you want to create a new role assigning message, you would type

  ```json
  ./role_assigner [
      {
          "give": ":thumbsup:",
          "strip": ":thumbsdown:",
          "role_id": "moba"
      },
      {
          "give": ":rofl:",
          "strip": ":dog:",
          "role_id": "fps"
      }
  ]
  ```

  This would create message with which you could reply with `:thumbsup:` to be added to `moba` or for example `:dog:` to be removed from `fps`

:::caution

For Portal to be able to assign roles, said roles must all be beneath Portal's role, in server settings

:::
