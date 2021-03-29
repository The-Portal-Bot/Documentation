---
id: set
title: set
sidebar_label: set
---

|          Description           |       Argument        | Accessible | Cooldown |
| :----------------------------: | :-------------------: | :--------: | :------: |
| Sets the value of an attribute | **!attribute !value** |  `admin`   |  `none`  |

:::note

Note that you do not have to use attribute prefix (&), as you can only set attributes

:::

## Examples

- Lets say you want to set the attribute locale of the Portal, you would type

  ```bash
  ./set g.locale gr
  ```

  will update global locale to gr

- Lets say you want to set the attribute regex of your current voice channel, you would type

  ```bash
  ./set v.regex My new name
  ```

  will update name of current voice to _My new name_
