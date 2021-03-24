---
id: ranking
title: Ranking System
sidebar_label: Ranking System
---

## Description

Portal's leveling system tracks messages sent and minutes spent in server's
voice channels. Different actions ammount to different points that give you
levels which then give you roles.

### Ranking Speed

There are four ranking speeds.

1. **none**, _ranking is disabled_
2. **slow**, _members have to engage more to rank up_ and the _multiplier is 0.05_
3. **default**, _the normal mode_ and the _multiplier is 0.10_
4. **fast**, _members get levels faster_ and the _multiplier is 0.15_

### Voice channel points are given as follows

**seconds spent** x speed-multiplier<br />
**minutes spent** x speed-multiplier x 60 x 1.15<br />
**hours spent** x speed-multiplier x 60 x 60 x 1.25<br />


### Points per message are given as follows

**message characters** x speed-multiplier<br />
_(maximum amount of points per message is 5)_

### Leveling

A **Tier** is a state you are in, as you level you up, you will get higher tiers as well.
Higher tiers means harder level ups, which can be seen bellow.

When **points** are creater than **tier x 1000**, you level up. Doing do will reset your points.
Every fifth level increase you progress to the next **tier** which means it is harder to level up.<br />
_(Leveling from 1-5 is easier than 5-10 and so on)_

### Setting up the Ranking System

You must use command [set_ranks](commands/detailed/set_ranks) in order to set the Ranking System in place.
The ranking system is set once and if something must be added, you have to re-write the system.
In order to see the the current ranking system use command [ranks](commands/detailed/ranks).

:::important

Roles that are destributed are not remove upon Ranking System update.

:::

### Get Ranking Information

* To see the server leaderboard use command [leaderboard](commands/detailed/leaderboard)
* To see your current ranking stats use command [level](commands/detailed/level)
* To see what role you get at what level use command [ranks](commands/detailed/ranks)