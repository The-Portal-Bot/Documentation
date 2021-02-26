---
id: command_ignore
title: ignore
sidebar_label: ignore
---

|                            Description                             |               Argument                | Accessible | Cooldown |
| :----------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | __!channel \| @category__ |  `admin`   |  `none`  |

## Examples

* Lets say you want to create a new ignore channel, you would type
    ```bash
    ./ignore portal_free
    ```

    This would create a new ignore channel called _megaphone_.

* Lets say you want to create a new ignore channel under a category, you would type
    ```bash
    ./ignore cars | portal_free_zone
    ```

    This would create a new ignore channel called _megaphone_ under category _ignores_.

* Lets say you want to ignore a member called Mallory with id (228666893068795905), you would type
    ```bash
    ./ignore 228666893068795905
    ```
    or
    ```bash
    ./ignore Mallory
    ```

* Lets say you want to stop ignoring Mallory with id (228666893068795905), you would type
    ```bash
    ./ignore 228666893068795905
    ```
    or
    ```bash
    ./ignore Mallory
    ```
