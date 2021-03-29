---
id: description
title: Commands
sidebar_label: Description
---

Commands are used to communicate with Portal, by typing `{prefix}{command}` (ex. ./about)
you can access this command, and await a reply or action from Portal.<br /><br />
**Portal prefix: ./ _(default)_**

## A

---

### [about](/docs/commands/detailed/about)

|           Description           | Argument | Clearance  | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns an about Portal message | **none** | `everyone` |  `none`  |

### [announce](/docs/commands/detailed/announce)

|                              Description                              |      Argument       | Clearance  |  Cooldown   |
| :-------------------------------------------------------------------: | :-----------------: | :--------: | :---------: |
| Makes an announcement in the announcement<br />channel and tags @here | **!title \| @body** | `everyone` | `1min/user` |

### [announcement](/docs/commands/detailed/announcement)

|                                     Description                                     |         Argument          | Clearance | Cooldown |
| :---------------------------------------------------------------------------------: | :-----------------------: | :-------: | :------: |
| Creates a new announcement channel or<br />sets the current channel as announcement | **!channel \| @category** |  `admin`  |  `none`  |

## B

---

### [ban](/docs/commands/detailed/ban)

|        Description        |       Argument       | Accessible  |   Cooldown    |
| :-----------------------: | :------------------: | :---------: | :-----------: |
| Bans a member from server | **@reason \| @days** | `moderator` | `1min/member` |

### [bet](/docs/commands/detailed/bet)

|              Description              |      Argument       | Clearance  | Cooldown |
| :-----------------------------------: | :-----------------: | :--------: | :------: |
| Replies with the latest betting stats | **!provider !game** | `everyone` |  `none`  |

## C

---

### [corona](/docs/commands/detailed/corona)

|                    Description                     |     Argument      | Clearance  | Cooldown |
| :------------------------------------------------: | :---------------: | :--------: | :------: |
| Replies with the daily state of corona virus cases | **!country_code** | `everyone` |  `none`  |

### [crypto](/docs/commands/detailed/crypto)

|                        Description                         |            Argument             | Clearance  | Cooldown |
| :--------------------------------------------------------: | :-----------------------------: | :--------: | :------: |
| Replies with the current price of requested cryptocurrency | **!cryptocurrency \| exchange** | `everyone` |  `none`  |

## D

---

### [delete](/docs/commands/detailed/delete)

|                    Description                    |        Argument        | Clearance | Cooldown |
| :-----------------------------------------------: | :--------------------: | :-------: | :------: |
| Deletes n number of messsages on the text channel | **!numer_of_messages** |  `admin`  |  `none`  |

:::note

Note that Portal will delete n + 1 messages as it will also delete the command to delete

:::

## F

---

### [focus](/docs/commands/detailed/focus)

|                       Description                       |      Argument       | Clearance | Cooldown |
| :-----------------------------------------------------: | :-----------------: | :-------: | :------: |
| Creates focus channel for you and your requested member | **!username @time** |  `admin`  |  `none`  |

:::note

If duration is not specified the channel will live until everyone has left

:::

### [force](/docs/commands/detailed/force)

|                     Description                      | Argument | Clearance |   Cooldown   |
| :--------------------------------------------------: | :------: | :-------: | :----------: |
| Clones current channel in order to force-update name | **none** |  `admin`  | `2min/admin` |

## H

---

### [help](/docs/commands/detailed/help)

|                          Description                          |                                        Argument                                         | Clearance  | Cooldown |
| :-----------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------: | :------: |
| Returns a help-list if specified returns specific description | **variables/attributes/pipes/structures**,<br /> **@command/@vrbl/@attr/@pipe/@struct** | `everyone` |  `none`  |

## I

---

### [ignore](/docs/commands/detailed/ignore)

|                       Description                       | Argument | Clearance | Cooldown |
| :-----------------------------------------------------: | :------: | :-------: | :------: |
| ignore channels, so that portal does not listen to them | **none** |  `admin`  |  `none`  |

## J

---

### [join](/docs/commands/detailed/join)

|                            Description                             |         Argument          | Clearance | Cooldown |
| :----------------------------------------------------------------: | :-----------------------: | :-------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | **!channel \| @category** |  `admin`  |  `none`  |

### [joke](/docs/commands/detailed/joke)

|     Description     |   Argument    | Clearance  | Cooldown |
| :-----------------: | :-----------: | :--------: | :------: |
| Replies with a joke | **@category** | `everyone` |  `none`  |

:::note

Note that category can be dad, chuck or blonde

:::

## K

### [kick](/docs/commands/detailed/kick)

|        Description         |  Argument   | Accessible  |   Cooldown    |
| :------------------------: | :---------: | :---------: | :-----------: |
| Kicks a member from server | **@reason** | `moderator` | `1min/member` |

## L

---

### [leaderboard](/docs/commands/detailed/leaderboard)

|             Description             |        Argument        | Clearance  | Cooldown |
| :---------------------------------: | :--------------------: | :--------: | :------: |
| Replies with the top 10 leaderboard | **@number_of_members** | `everyone` |  `none`  |

### [leave](/docs/commands/detailed/leave)

|            Description            | Argument | Clearance  | Cooldown |
| :-------------------------------: | :------: | :--------: | :------: |
| Removes Portal from voice channel | **none** | `everyone` |  `none`  |

### [level](/docs/commands/detailed/level)

|    Description     | Argument | Clearance  | Cooldown |
| :----------------: | :------: | :--------: | :------: |
| Returns your level | **none** | `everyone` |  `none`  |

## M

---

### [music](/docs/commands/detailed/music)

|                              Description                              |         Argument          | Clearance | Cooldown |
| :-------------------------------------------------------------------: | :-----------------------: | :-------: | :------: |
| Creates a new music channel or sets<br />the current channel as music | **!channel \| @category** |  `admin`  |  `none`  |

## N

---

### [news](/docs/commands/detailed/news)

|                Description                 |             Argument              | Clearance  | Cooldown |
| :----------------------------------------: | :-------------------------------: | :--------: | :------: |
| Replies with the latest news from category | \__!category @number_of_articles_ | `everyone` |  `none`  |

## P

---

### [ping](/docs/commands/detailed/ping)

|                 Description                 | Argument | Clearance  | Cooldown |
| :-----------------------------------------: | :------: | :--------: | :------: |
| Pings Portal and returns round trip latency | **none** | `everyone` |  `none`  |

### [poll](/docs/commands/detailed/poll)

|                              Description                               |              Argument              | Clearance  | Cooldown |
| :--------------------------------------------------------------------: | :--------------------------------: | :--------: | :------: |
| Replies with a message poll, that people can vote until owner stops it | **!poll_question \| [JSON array]** | `everyone` |  `none`  |

### [portal](/docs/commands/detailed/portal)

|                               Description                               |         Argument          | Clearance | Cooldown |
| :---------------------------------------------------------------------: | :-----------------------: | :-------: | :------: |
| Creates a new portal channel or sets<br />the current channel as portal | **!channel \| @category** |  `admin`  |  `none`  |

## R

---

### [ranks](/docs/commands/detailed/ranks)

|           Description           | Argument | Clearance  | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns ranks of ranking system | **none** | `everyone` |  `none`  |

### [role_assigner ](/docs/commands/detailed/role_assigner)

|                          Description                           |    Argument    | Clearance | Cooldown |
| :------------------------------------------------------------: | :------------: | :-------: | :------: |
| Replies with a message that gives roles when an emote is added | **!role_json** |  `admin`  |  `none`  |

:::caution

For Portal to be able to assign roles, said roles must all be beneath Portal's role, in server settings

:::

### [roll](/docs/commands/detailed/roll)

|                  Description                  |      Argument      | Clearance  | Cooldown |
| :-------------------------------------------: | :----------------: | :--------: | :------: |
| Roll follows the same philosophy as in roll20 | **!roll sequence** | `everyone` |  `none`  |

### [run](/docs/commands/detailed/run)

|                     Description                      |     Argument      | Clearance  | Cooldown |
| :--------------------------------------------------: | :---------------: | :--------: | :------: |
| Runs the given command string and returns its output | **!exec_command** | `everyone` |  `none`  |

:::note

run is designed for you to test names before setting them to your channel

:::

## S

---

### [set_ranks](/docs/commands/detailed/set_ranks)

|                     Description                      | Argument | Clearance | Cooldown |
| :--------------------------------------------------: | :------: | :-------: | :------: |
| Sets roles that will be given when said level reache | **none** |  `admin`  |  `none`  |

### [set](/docs/commands/detailed/set)

|          Description           |       Argument        | Clearance | Cooldown |
| :----------------------------: | :-------------------: | :-------: | :------: |
| Sets the value of an attribute | **!attribute !value** |  `admin`  |  `none`  |

:::note

Note that you do not have to use attribute prefix (&), as you can only set attributes

:::

### [state](/docs/commands/detailed/state)

|             Description             | Argument | Clearance  | Cooldown |
| :---------------------------------: | :------: | :--------: | :------: |
| Returns the current state of Portal | **none** | `everyone` |  `none`  |

## U

---

### [url](/docs/commands/detailed/url)

|                            Description                            |         Argument          | Clearance | Cooldown |
| :---------------------------------------------------------------: | :-----------------------: | :-------: | :------: |
| Creates a new url channel or sets<br />the current channel as url | **!channel \| @category** |  `admin`  |  `none`  |

## W

---

### [weather](/docs/commands/detailed/weather)

|                       Description                       |    Argument    | Clearance  | Cooldown |
| :-----------------------------------------------------: | :------------: | :--------: | :------: |
| Replies with the current whether for the requested city | **!city_name** | `everyone` |  `none`  |

### [whoami](/docs/commands/detailed/whoami)

|                   Description                   | Argument | Clearance  | Cooldown |
| :---------------------------------------------: | :------: | :--------: | :------: |
| Replies with the your personal information card | **none** | `everyone` |  `none`  |
