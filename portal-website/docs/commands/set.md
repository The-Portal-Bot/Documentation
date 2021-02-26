---
id: command_set
title: set
sidebar_label: set
---

|          Description           |       Argument        | Accessible | Cooldown |
| :----------------------------: | :-------------------: | :--------: | :------: |
| Sets the value of an attribute | __!attribute !value__ |  `admin`   |  `none`  |

:::note

Note that you do not have to use attribute prefix (&), as you can only set attributes

:::

## Examples

* Lets say you want to set the attribute locale of the Portal, you would type
    ```bash
    ./set g.locale gr
    ```

* Lets say you want to set the attribute regex of your current voice channel, you would type
    ```bash
    ./set v.locale My new name
    ```