---
id: poll
title: poll
sidebar_label: poll
---

|                              Description                               |              Argument              | Accessible | Cooldown |
| :--------------------------------------------------------------------: | :--------------------------------: | :--------: | :------: |
| Replies with a message poll, that people can vote until owner stops it | __!poll_question \| [JSON array]__ | `everyone` |  `none`  |

## Examples

* Lets say you want to create a new poll, you would type
    ```json
    ./poll Should I buy a new phone ? | [ "yes", "no" ]
    ```

    This would create message with all options given alongside a numbered emote.
    Polling is indefinate and ends when creator reacts with 🏁.

:::tip

There is a minimum of 2 and a maximum of 9 options per poll

:::