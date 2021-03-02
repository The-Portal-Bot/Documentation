---
id: command_spotify
title: spotify (deprecated)
sidebar_label: spotify (deprecated)
---

:::warning

Deprecated: as it gave a little value and often lead to spam, it has been discontinued

:::

|                                Description                                |               Argument                | Accessible | Cooldown |
| :-----------------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new spotify channel or sets<br />the current channel as spotify | __!channel \| @category__ |  `admin`   |  `none`  |

## Examples

* Lets say you want to create a new spotify channel, you would type
    ```bash
    ./spotify listening_list
    ```

    This would create a new spotify channel called _listening_list_.

* Lets say you want to create a new spotify channel under a category, you would type
    ```bash
    ./spotify listening_list | spotify
    ```

    This would create a new spotify channel called _listening_list_ under category _spotify_.