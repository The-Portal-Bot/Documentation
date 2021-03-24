---
id: help
title: help
sidebar_label: help
---

|                          Description                          |                                        Argument                                         | Accessible | Cooldown |
| :-----------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------: | :------: |
| Returns a help-list if specified returns specific description | __variables/attributes/pipes/structures__,<br /> __@command/@vrbl/@attr/@pipe/@struct__ | `everyone` |  `none`  |

## Examples

* Lets say you want to get general information, you would type
    ```bash
    ./help
    ```

* Lets say you want to learn how to use the command force, you would type
    ```bash
    ./help force
    ```

* Lets say you want to know all the variables Portal has, you would type
    ```bash
    ./help variables
    ```

* Lets say you want to know all the variables guide Portal has, you would type
    ```bash
    ./help variables guide
    ```

:::tip

help command can be given arguments:
1.  [interpreter types](/docs/interpreter/description) (ex. variables, pipes, etc)
2.  [commands](/docs/commands/description) (ex. portal, focus, etc)
3.  guides for example `./help variables guide` will reply on how to use variables.

:::