---
id: ban
title: ban
sidebar_label: ban
---

|        Description        |       Argument       | Accessible  |   Cooldown    |
| :-----------------------: | :------------------: | :---------: | :-----------: |
| Bans a member from server | **@reason \| @days** | `moderator` | `1min/member` |

## Examples

- Lets say you want to ban member Mallory for one day, you would type

  ```bash
  /ban @Mallory
  ```

  Mallory will be banned with reason _banned by admin_ for _1_ day, as these are
  the default values.

- Lets say you want to ban member Mallory with reason _'used profanities'_ for _3 days_, you would type

  ```bash
  /ban @Mallory | used profanities | 3
  ```

  Mallory will be banned with reason _used profanities_ for _3_ days.
