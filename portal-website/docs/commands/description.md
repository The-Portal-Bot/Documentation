---
id: description
title: Commands
sidebar_label: Description
---

Commands are used to communicate with Portal, by typing `{prefix}{command}` (ex. ./about) 
you can access this command, and await a reply or action from Portal.<br /><br />
**Portal prefix: ./ *(default)***

### [about](/docs/commands/detailed/about)

|           Description           | Argument | Accessible | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns an about Portal message | __none__ | `everyone` |  `none`  |

### [announce](/docs/commands/detailed/announce)

|                              Description                              |      Argument       | Accessible |  Cooldown   |
| :-------------------------------------------------------------------: | :-----------------: | :--------: | :---------: |
| Makes an announcement in the announcement<br />channel and tags @here | __!title \| @body__ | `everyone` | `1min/user` |

### [announcement](/docs/commands/detailed/announcement)

|                                     Description                                     |         Argument          | Accessible | Cooldown |
| :---------------------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new announcement channel or<br />sets the current channel as announcement | __!channel \| @category__ |  `admin`   |  `none`  |

### [bet](/docs/commands/detailed/bet)

|              Description              |      Argument       | Accessible | Cooldown |
| :-----------------------------------: | :-----------------: | :--------: | :------: |
| Replies with the latest betting stats | __!provider !game__ | `everyone` |  `none`  |

### [corona](/docs/commands/detailed/corona)

|                    Description                     |     Argument      | Accessible | Cooldown |
| :------------------------------------------------: | :---------------: | :--------: | :------: |
| Replies with the daily state of corona virus cases | __!country_code__ | `everyone` |  `none`  |

### [crypto](/docs/commands/detailed/crypto)

|                        Description                         |            Argument             | Accessible | Cooldown |
| :--------------------------------------------------------: | :-----------------------------: | :--------: | :------: |
| Replies with the current price of requested cryptocurrency | __!cryptocurrency \| exchange__ | `everyone` |  `none`  |

### [delete](/docs/commands/detailed/delete)

|                    Description                    |        Argument        | Accessible | Cooldown |
| :-----------------------------------------------: | :--------------------: | :--------: | :------: |
| Deletes n number of messsages on the text channel | __!numer_of_messages__ |  `admin`   |  `none`  |

:::note

Note that Portal will delete n + 1 messages as it will also delete the command to delete

:::

### [focus](/docs/commands/detailed/focus)

|                       Description                       |      Argument       | Accessible | Cooldown |
| :-----------------------------------------------------: | :-----------------: | :--------: | :------: |
| Creates focus channel for you and your requested member | __!username @time__ |  `admin`   |  `none`  |

:::note

If duration is not specified the channel will live until everyone has left

:::

### [force](/docs/commands/detailed/force)

|                     Description                      | Argument | Accessible |   Cooldown   |
| :--------------------------------------------------: | :------: | :--------: | :----------: |
| Clones current channel in order to force-update name | __none__ |  `admin`   | `2min/admin` |

### [help](/docs/commands/detailed/help)

|                          Description                          |                                        Argument                                         | Accessible | Cooldown |
| :-----------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------: | :------: |
| Returns a help-list if specified returns specific description | __variables/attributes/pipes/structures__,<br /> __@command/@vrbl/@attr/@pipe/@struct__ | `everyone` |  `none`  |

### [ignore](/docs/commands/detailed/ignore)

|                            Description                             |         Argument          | Accessible | Cooldown |
| :----------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | __!channel \| @category__ |  `admin`   |  `none`  |

### [join](/docs/commands/detailed/join)

|                            Description                             |         Argument          | Accessible | Cooldown |
| :----------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | __!channel \| @category__ |  `admin`   |  `none`  |

### [joke](/docs/commands/detailed/joke)

|     Description     |   Argument    | Accessible | Cooldown |
| :-----------------: | :-----------: | :--------: | :------: |
| Replies with a joke | __@category__ | `everyone` |  `none`  |

:::note

Note that category can be dad, chuck or blonde

:::

### [leaderboard](/docs/commands/detailed/leaderboard)

|             Description             |        Argument        | Accessible | Cooldown |
| :---------------------------------: | :--------------------: | :--------: | :------: |
| Replies with the top 10 leaderboard | __@number_of_members__ | `everyone` |  `none`  |

### [leave](/docs/commands/detailed/leave)

|            Description            | Argument | Accessible | Cooldown |
| :-------------------------------: | :------: | :--------: | :------: |
| Removes Portal from voice channel | __none__ | `everyone` |  `none`  |

### [level](/docs/commands/detailed/level)

|    Description     | Argument | Accessible | Cooldown |
| :----------------: | :------: | :--------: | :------: |
| Returns your level | __none__ | `everyone` |  `none`  |

### [music](/docs/commands/detailed/music)

|                              Description                              |         Argument          | Accessible | Cooldown |
| :-------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new music channel or sets<br />the current channel as music | __!channel \| @category__ |  `admin`   |  `none`  |

### [news](/docs/commands/detailed/news)

|                Description                 |             Argument             | Accessible | Cooldown |
| :----------------------------------------: | :------------------------------: | :--------: | :------: |
| Replies with the latest news from category | __!category @number_of_articles_ | `everyone` |  `none`  |

### [ping](/docs/commands/detailed/ping)

|                 Description                 | Argument | Accessible | Cooldown |
| :-----------------------------------------: | :------: | :--------: | :------: |
| Pings Portal and returns round trip latency | __none__ | `everyone` |  `none`  |

### [poll](/docs/commands/detailed/poll)

|                              Description                               |              Argument              | Accessible | Cooldown |
| :--------------------------------------------------------------------: | :--------------------------------: | :--------: | :------: |
| Replies with a message poll, that people can vote until owner stops it | __!poll_question \| [JSON array]__ | `everyone` |  `none`  |

### [portal](/docs/commands/detailed/portal)

|                               Description                               |         Argument          | Accessible | Cooldown |
| :---------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new portal channel or sets<br />the current channel as portal | __!channel \| @category__ |  `admin`   |  `none`  |

### [ranks](/docs/commands/detailed/ranks)

|           Description           | Argument | Accessible | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns ranks of ranking system | __none__ | `everyone` |  `none`  |

### [role_assigner ](/docs/commands/detailed/role_assigner )

|                          Description                           |    Argument    | Accessible | Cooldown |
| :------------------------------------------------------------: | :------------: | :--------: | :------: |
| Replies with a message that gives roles when an emote is added | __!role_json__ |  `admin`   |  `none`  |

:::caution

For Portal to be able to assign roles, said roles must all be beneath Portal's role, in server settings

:::

### [roll](/docs/commands/detailed/roll)

|                  Description                  |      Argument      | Accessible | Cooldown |
| :-------------------------------------------: | :----------------: | :--------: | :------: |
| Roll follows the same philosophy as in roll20 | __!roll sequence__ | `everyone` |  `none`  |

### [run](/docs/commands/detailed/run)

|                     Description                      |      Argument      | Accessible | Cooldown |
| :--------------------------------------------------: | :----------------: | :--------: | :------: |
| Runs the given command string and returns its output | __!exec\_command__ | `everyone` |  `none`  |

:::note

run is designed for you to test names before setting them to your channel

:::

### [set_ranks](/docs/commands/detailed/set_ranks)

|                     Description                      | Argument | Accessible | Cooldown |
| :--------------------------------------------------: | :------: | :--------: | :------: |
| Sets roles that will be given when said level reache | __none__ |  `admin`   |  `none`  |

### [set](/docs/commands/detailed/set)

|          Description           |       Argument        | Accessible | Cooldown |
| :----------------------------: | :-------------------: | :--------: | :------: |
| Sets the value of an attribute | __!attribute !value__ |  `admin`   |  `none`  |

:::note

Note that you do not have to use attribute prefix (&), as you can only set attributes

:::

### [setup](/docs/commands/detailed/setup)

|                     Description                     | Argument | Accessible |   Cooldown    |
| :-------------------------------------------------: | :------: | :--------: | :-----------: |
| Creates an announcement, url-only and music channel | __none__ |  `admin`   | `10min/admin` |

### [state](/docs/commands/detailed/state)

|             Description             | Argument | Accessible | Cooldown |
| :---------------------------------: | :------: | :--------: | :------: |
| Returns the current state of Portal | __none__ | `everyone` |  `none`  |

### [url](/docs/commands/detailed/url)

|                            Description                            |         Argument          | Accessible | Cooldown |
| :---------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new url channel or sets<br />the current channel as url | __!channel \| @category__ |  `admin`   |  `none`  |

### [weather](/docs/commands/detailed/weather)

|                       Description                        |    Argument     | Accessible | Cooldown |
| :------------------------------------------------------: | :-------------: | :--------: | :------: |
| Replies with the current wheather for the requested city | __!city\_name__ | `everyone` |  `none`  |

### [whoami](/docs/commands/detailed/whoami)

|                   Description                   | Argument | Accessible | Cooldown |
| :---------------------------------------------: | :------: | :--------: | :------: |
| Replies with the your personal information card | __none__ | `everyone` |  `none`  |
