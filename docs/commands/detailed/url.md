---
id: url
title: url
sidebar_label: url
---

|                            Description                            |               Argument                | Accessible | Cooldown |
| :---------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new url channel or sets<br />the current channel as url | __!channel \| @category__ |  `admin`   |  `none`  |

## Examples

* Lets say you want to create a new url channel, you would type
    ```bash
    ./url youtube_videos
    ```

    This would create a new url channel called youtube_videos_.

* Lets say you want to create a new url channel under a category, you would type
    ```bash
    ./url youtube_videos | url
    ```

    This would create a new url channel called youtube_videos_ under category _url_.