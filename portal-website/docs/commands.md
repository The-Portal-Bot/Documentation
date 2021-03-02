---
id: commands
title: Commands
sidebar_label: Commands
---

Commands are used to communicate with Portal, by typing `{prefix}{command}` (ex. ./about) 
you can access this command, and await a reply or action from Portal.<br /><br />
**Portal prefix: ./ *(default)***

### [about](/docs/commands/command_about)

|           Description           | Argument | Accessible | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns an about Portal message | __none__ | `everyone` |  `none`  |

### [announce](/docs/commands/command_announce)

|                              Description                              |      Argument       | Accessible |  Cooldown   |
| :-------------------------------------------------------------------: | :-----------------: | :--------: | :---------: |
| Makes an announcement in the announcement<br />channel and tags @here | __!title \| @body__ | `everyone` | `1min/user` |

### [announcement](/docs/commands/command_announcement)

|                                     Description                                     |         Argument          | Accessible | Cooldown |
| :---------------------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new announcement channel or<br />sets the current channel as announcement | __!channel \| @category__ |  `admin`   |  `none`  |

### [authorise](/docs/commands/command_authorise)

|                           Description                            |         Argument         | Accessible | Cooldown |
| :--------------------------------------------------------------: | :----------------------: | :--------: | :------: |
| Authorise a role or member, adding <br />them to authorised list | __!role or !member\_id__ |  `admin`   |  `none`  |

### [authorised_roles](/docs/commands/command_authorised_roles)

|          Description           | Argument | Accessible | Cooldown |
| :----------------------------: | :------: | :--------: | :------: |
| Displayes all authorised roles | __none__ | `everyone` |  `none`  |

### [corona](/docs/commands/command_corona)

|                    Description                     |     Argument      | Accessible | Cooldown |
| :------------------------------------------------: | :---------------: | :--------: | :------: |
| Replies with the daily state of corona virus cases | __!country_code__ | `everyone` |  `none`  |

### [crypto](/docs/commands/command_crypto)

|                        Description                         |            Argument             | Accessible | Cooldown |
| :--------------------------------------------------------: | :-----------------------------: | :--------: | :------: |
| Replies with the current price of requested cryptocurrency | __!cryptocurrency \| exchange__ | `everyone` |  `none`  |

### [deauthorise](/docs/commands/command_deauthorise)

|         Description          |         Argument         | Accessible | Cooldown |
| :--------------------------: | :----------------------: | :--------: | :------: |
| Deauthorise a role or member | __!role or !member\_id__ |  `admin`   |  `none`  |

### [delete](/docs/commands/command_delete)

|                    Description                    |        Argument        | Accessible | Cooldown |
| :-----------------------------------------------: | :--------------------: | :--------: | :------: |
| Deletes n number of messsages on the text channel | __!numer_of_messages__ |  `admin`   |  `none`  |

:::note

Note that Portal will delete n + 1 messages as it will also delete the command to delete

:::

### [dj](/docs/commands/command_dj)

|        Description        |    Argument     | Accessible | Cooldown |
| :-----------------------: | :-------------: | :--------: | :------: |
| Sets given member as a dj | __!member\_id__ |  `admin`   |  `none`  |

### [focus](/docs/commands/command_focus)

|                       Description                       |      Argument       | Accessible | Cooldown |
| :-----------------------------------------------------: | :-----------------: | :--------: | :------: |
| Creates focus channel for you and your requested member | __!username @time__ |  `admin`   |  `none`  |

:::note

If duration is not specified the channel will live until everyone has left

:::

### [force](/docs/commands/command_force)

|                     Description                      | Argument | Accessible |   Cooldown   |
| :--------------------------------------------------: | :------: | :--------: | :----------: |
| Clones current channel in order to force-update name | __none__ |  `admin`   | `2min/admin` |

### [help](/docs/commands/command_help)

|                          Description                          |                                        Argument                                         | Accessible | Cooldown |
| :-----------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------: | :------: |
| Returns a help-list if specified returns specific description | __variables/attributes/pipes/structures__,<br /> __@command/@vrbl/@attr/@pipe/@struct__ | `everyone` |  `none`  |

### [ignore](/docs/commands/command_ignore)

|                            Description                             |         Argument          | Accessible | Cooldown |
| :----------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | __!channel \| @category__ |  `admin`   |  `none`  |

### [ignored](/docs/commands/command_ignored)

|         Description          | Argument | Accessible | Cooldown |
| :--------------------------: | :------: | :--------: | :------: |
| Displays all ignored members | __none__ | `everyone` |  `none`  |

### [join](/docs/commands/command_join)

|                            Description                             |         Argument          | Accessible | Cooldown |
| :----------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | __!channel \| @category__ |  `admin`   |  `none`  |

### [joke](/docs/commands/command_joke)

|     Description     |   Argument    | Accessible | Cooldown |
| :-----------------: | :-----------: | :--------: | :------: |
| Replies with a joke | __@category__ | `everyone` |  `none`  |

:::note

Note that category can be dad, chuck or blonde

:::

### [leaderboard](/docs/commands/command_leaderboard)

|             Description             |        Argument        | Accessible | Cooldown |
| :---------------------------------: | :--------------------: | :--------: | :------: |
| Replies with the top 10 leaderboard | __@number_of_members__ | `everyone` |  `none`  |

### [leave](/docs/commands/command_leave)

|            Description            | Argument | Accessible | Cooldown |
| :-------------------------------: | :------: | :--------: | :------: |
| Removes Portal from voice channel | __none__ | `everyone` |  `none`  |

### [level](/docs/commands/command_level)

|    Description     | Argument | Accessible | Cooldown |
| :----------------: | :------: | :--------: | :------: |
| Returns your level | __none__ | `everyone` |  `none`  |

### [music](/docs/commands/command_music)

|                              Description                              |         Argument          | Accessible | Cooldown |
| :-------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new music channel or sets<br />the current channel as music | __!channel \| @category__ |  `admin`   |  `none`  |

### [ping](/docs/commands/command_ping)

|                 Description                 | Argument | Accessible | Cooldown |
| :-----------------------------------------: | :------: | :--------: | :------: |
| Pings Portal and returns round trip latency | __none__ | `everyone` |  `none`  |

### [portal](/docs/commands/command_portal)

|                               Description                               |         Argument          | Accessible | Cooldown |
| :---------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new portal channel or sets<br />the current channel as portal | __!channel \| @category__ |  `admin`   |  `none`  |

### [prefix](/docs/commands/command_prefix)

|         Description          |  Argument   | Accessible | Cooldown |
| :--------------------------: | :---------: | :--------: | :------: |
| Set the prefix of the server | __!prefix__ |  `admin`   |  `none`  |

### [ranks](/docs/commands/command_ranks)

|           Description           | Argument | Accessible | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns ranks of ranking system | __none__ | `everyone` |  `none`  |

### [role_assigner ](/docs/commands/command_role_assigner )

|                          Description                           |    Argument    | Accessible | Cooldown |
| :------------------------------------------------------------: | :------------: | :--------: | :------: |
| Replies with a message that gives roles when an emote is added | __!role_json__ |  `admin`   |  `none`  |

:::caution

For Portal to be able to assign roles, said roles must all be beneath Portal's role, in server settings

:::

### [roll](/docs/commands/command_roll)

|                  Description                  |      Argument      | Accessible | Cooldown |
| :-------------------------------------------: | :----------------: | :--------: | :------: |
| Roll follows the same philosophy as in roll20 | __!roll sequence__ | `everyone` |  `none`  |

### [run](/docs/commands/command_run)

|                     Description                      |      Argument      | Accessible | Cooldown |
| :--------------------------------------------------: | :----------------: | :--------: | :------: |
| Runs the given command string and returns its output | __!exec\_command__ | `everyone` |  `none`  |

:::note

run is designed for you to test names before setting them to your channel

:::

### [set_ranks](/docs/commands/command_set_ranks)

|                     Description                      | Argument | Accessible | Cooldown |
| :--------------------------------------------------: | :------: | :--------: | :------: |
| Sets roles that will be given when said level reache | __none__ |  `admin`   |  `none`  |

### [set](/docs/commands/command_set)

|          Description           |       Argument        | Accessible | Cooldown |
| :----------------------------: | :-------------------: | :--------: | :------: |
| Sets the value of an attribute | __!attribute !value__ |  `admin`   |  `none`  |

:::note

Note that you do not have to use attribute prefix (&), as you can only set attributes

:::

### [setup](/docs/commands/command_setup)

|                         Description                          | Argument | Accessible |   Cooldown    |
| :----------------------------------------------------------: | :------: | :--------: | :-----------: |
| Creates an announcement, url-only and music channel | __none__ |  `admin`   | `10min/admin` |

### [spotify (deprecated)](/docs/commands/command_spotify)

|                                Description                                |         Argument          | Accessible | Cooldown |
| :-----------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new spotify channel or sets<br />the current channel as spotify | __!channel \| @category__ |  `admin`   |  `none`  |

:::caution

Deprecated: as it gave a little value and often lead to spam, it has been discontinued

:::

### [state](/docs/commands/command_state)

|             Description             | Argument | Accessible | Cooldown |
| :---------------------------------: | :------: | :--------: | :------: |
| Returns the current state of Portal | __none__ | `everyone` |  `none`  |

### [url](/docs/commands/command_url)

|                            Description                            |         Argument          | Accessible | Cooldown |
| :---------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new url channel or sets<br />the current channel as url | __!channel \| @category__ |  `admin`   |  `none`  |

### [weather](/docs/commands/command_weather)

|                       Description                        |    Argument     | Accessible | Cooldown |
| :------------------------------------------------------: | :-------------: | :--------: | :------: |
| Replies with the current wheather for the requested city | __!city\_name__ | `everyone` |  `none`  |

### [whoami](/docs/commands/command_whoami)

|                   Description                   | Argument | Accessible | Cooldown |
| :---------------------------------------------: | :------: | :--------: | :------: |
| Replies with the your personal information card | __none__ | `everyone` |  `none`  |
