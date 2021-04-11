---
id: vendor
title: vendor
sidebar_label: vendor
---

|                                    Description                                    |    Argument    | Accessible | Cooldown |
| :-------------------------------------------------------------------------------: | :------------: | :--------: | :------: |
| Generates with a message that gives or removes a member from corresponding role/s | **!role_json** |  `admin`   |  `none`  |

## Examples

- Lets say you want to create a new role assigning message, you would type

  ```json
  ./vendor [
      {
          "emote": ":thumbsup:",
          "role": ["Apex Legends", "CS:GO"]
      },
      {
          "emote": ":thumbsdown:",
          "role": ["moba"]
      }
  ]
  ```

  This would create message to which you can react with

  1. :thumbsup: to be added/removed from roles **"Apex Legends"**, **"CS:GO"**
  2. :thumbsdown: to be added/removed from **"fps"**

:::tip

If you have at least one role and react to a multi-assigner you will be removed from all emotes that
the current emote is corresponding (having "Apex Legends" would remove you from "CS:GO" is you reacted with :thumbsup:)

:::

:::caution

For Portal to be able to assign roles, said roles must all be beneath Portal's role, in server settings

:::
