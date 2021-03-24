---
id: roll
title: roll
sidebar_label: roll
---

|                  Description                  |      Argument      | Accessible | Cooldown |
| :-------------------------------------------: | :----------------: | :--------: | :------: |
| Roll follows the same philosophy as in roll20 | __!roll sequence__ | `everyone` |  `none`  |

## Examples

* Lets say you want to roll 1 dice that has 6 sides, you would type
    ```bash
    ./roll 1d6
    ```

    possible reply: `@you rolled 6`

* Lets say you want to roll 1 dice that has 6 sides and also see the dices you rolled, you would type
    ```bash
    ./roll 1d6 | show
    ```

    possible reply: `@you rolled 6 (1,2,1,2 from 1d6+3d2)`

* Lets say you want to roll 1 dice that has 6 sides 3 dices that have 2 sides, you would type
    ```bash
    ./roll 1d6+3d2
    ```

    possible reply: `@you rolled 8`