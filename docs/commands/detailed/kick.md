---
id: kick
title: kick
sidebar_label: kick
---

|        Description         |    Argument     | Accessible  |  Cooldown   |
| :------------------------: | :-------------: | :---------: | :---------: | ------------- |
| Kicks a member from server | \*\*!member_tag | @reason\*\* | `moderator` | `1min/member` |

## Examples

- Lets say you want to kick member Mallory, you would type

  ```bash
  ./kick @Mallory
  ```

  Mallory will be kickned with reason _kickned by admin_, as these are
  the default values.

- Lets say you want to kick member Mallory with reason _'used profanities'_, you would type

  ```bash
  ./kick @Mallory | used profanities
  ```

  Mallory will be kickned with reason _used profanities_ days.
