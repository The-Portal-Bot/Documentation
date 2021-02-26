---
id: command_announcement
title: announcement
sidebar_label: announcement
---

|                                     Description                                     |               Argument                | Accessible | Cooldown |
| :---------------------------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new announcement channel or<br />sets the current channel as announcement | __!channel \| @category__ |  `admin`   |  `none`  |

## Examples

* Lets say you want to create a new announcement channel, you would type
    ```bash
    ./announcement megaphone
    ```

    This would create a new announcement channel called _megaphone_.

* Lets say you want to create a new announcement channel under a category, you would type
    ```bash
    ./announcement megaphone | announcements
    ```

    This would create a new announcement channel called _megaphone_ under category _announcements_.