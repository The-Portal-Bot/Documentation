---
id: command_announce
title: announce
sidebar_label: announce
---

|                              Description                               |      Argument       | Accessible |   Cooldown    |
| :--------------------------------------------------------------------: | :-----------------: | :--------: | :-----------: |
| Makes an announcement in the announcement <br />channel and tags @here | __!title \| @body__ | `everyone` | `1min/member` |

## Examples

* Lets say you want to ask people in the server to play CS:GO with you, you would type
    ```bash
    ./announce CS in 5 minutes ? | Have two free spots !
    ```

    This would create a message in the announcement channel (if it exists) that would have title: _CS in 5 minutes_ and message
    _Have two free spots !_.