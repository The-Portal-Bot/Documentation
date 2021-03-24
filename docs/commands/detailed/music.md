---
id: music
title: music
sidebar_label: music
---

|                              Description                              |               Argument                | Accessible | Cooldown |
| :-------------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new music channel or sets<br />the current channel as music | __!channel \| @category__ |  `admin`   |  `none`  |

## Examples

* Lets say you want to create a new music channel, you would type
    ```bash
    ./music music_player
    ```

    This would create a new music channel called _music_player_.

* Lets say you want to create a new music channel under a category, you would type
    ```bash
    ./music music_player | music
    ```

    This would create a new music channel called _music_player_ under category _music_.