---
id: focus
title: focus
sidebar_label: focus
---

|                       Description                       |      Argument       | Accessible | Cooldown |
| :-----------------------------------------------------: | :-----------------: | :--------: | :------: |
| Creates focus channel for you and your requested member | **!username @time** | `everyone` |  `none`  |

:::note

If duration is not specified the channel will live until everyone has left

:::

## Examples

1. Lets say you want to talk with a member called Mallory, you would type

   ```bash
       ./focus @Mallory
   ```

   1. Mallory will be asked if she wants to talk with you.
   2. If she replies with yes, a new channel will be made called `PR` (Private Room)<br />
      _as no time was specified, the chatroom will autodestruct_
   3. After the time has ended, you will be moved to your previous channel

2. Lets say you want to talk with a member called Mallory for 23 minutes, you would type

   ```bash
       ./focus @Mallory | 23
   ```

   1. Mallory will be asked if she want to talk with you.
   2. If she replies with yes, a new channel will be made called `PR-23' 12:45/01:08`
      _note that first part is current time and second part is expiration time_
   3. After the time you gave (11') has ended, you will be both moved<br \>
      to your previous channel and the focus channel will be deleted
      _note that the name would have been `PR-23' 01:05/01:08` as 10 minutes will have passed_

:::important

In case two members have the same name, it will select the first one it spots

:::
