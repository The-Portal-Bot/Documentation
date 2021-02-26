---
id: commands
title: Commands
sidebar_label: Commands
---

Commands are used to communicate with Portal, by typing `{prefix}{command}` (ex. ./about) you can access this command, and await a reply or action from Portal.
**Portal prefix: ./ *(default)***

### [about](commands/command_about)

|           Description           | Argument | Accessible | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns an about Portal message | __none__ | `everyone` |  `none`  |

### [announce](commands/command_announce)

|                              Description                               |      Argument       | Accessible |  Cooldown   |
| :--------------------------------------------------------------------: | :-----------------: | :--------: | :---------: |
| Makes an announcement in the announcement <br />channel and tags @here | __!title \| @body__ | `everyone` | `1min/user` |

### [announcement](commands/command_announcement)

|                                     Description                                     |               Argument                | Accessible | Cooldown |
| :---------------------------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new announcement channel or sets<br />the current channel as announcement | __@channel\_name \| @category\_name__ |  `admin`   |  `none`  |

### [authorise](commands/command_authorise)

|                           Description                            |         Argument         | Accessible | Cooldown |
| :--------------------------------------------------------------: | :----------------------: | :--------: | :------: |
| Authorise a role or member, adding <br />them to authorised list | __!role or !member\_id__ |  `admin`   |  `none`  |

### [authorised_roles](commands/command_authorised_roles)

|          Description           | Argument | Accessible | Cooldown |
| :----------------------------: | :------: | :--------: | :------: |
| Displayes all authorised roles | __none__ | `everyone` |  `none`  |

### [corona](commands/command_corona)

|                    Description                     |     Argument      | Accessible | Cooldown |
| :------------------------------------------------: | :---------------: | :--------: | :------: |
| Replies with the daily state of corona virus cases | __!country_code__ | `everyone` |  `none`  |

### [crypto](commands/command_crypto)

|                        Description                         |            Argument             | Accessible | Cooldown |
| :--------------------------------------------------------: | :-----------------------------: | :--------: | :------: |
| Replies with the current price of requested cryptocurrency | __!cryptocurrency \| exchange__ | `everyone` |  `none`  |

### [deauthorise](commands/command_deauthorise)

|         Description          |        Argument         | Accessible | Cooldown |
| :--------------------------: | :---------------------: | :--------: | :------: |
| Deauthorise a role or member | __!role or member\_id__ |  `admin`   |  `none`  |

### [delete](commands/command_delete)

|                    Description                    |        Argument        | Accessible | Cooldown |
| :-----------------------------------------------: | :--------------------: | :--------: | :------: |
| Deletes n number of messsages on the text channel | __!numer_of_messages__ |  `admin`   |  `none`  |
> Note that Portal will delete n + 1 messages as it will also delete the command to delete

### [dj](commands/command_dj)

|        Description        |    Argument     | Accessible | Cooldown |
| :-----------------------: | :-------------: | :--------: | :------: |
| Sets given member as a dj | __!member\_id__ |  `admin`   |  `none`  |

### [focus](commands/command_focus)

|                       Description                       |      Argument       | Accessible | Cooldown |
| :-----------------------------------------------------: | :-----------------: | :--------: | :------: |
| Creates focus channel for you and your requested member | __!username @time__ |  `admin`   |  `none`  |
> Note that if no time is given your focued channel will have a 5 minute life

### [force](commands/command_force)

|                     Description                      | Argument | Accessible |   Cooldown   |
| :--------------------------------------------------: | :------: | :--------: | :----------: |
| Clones current channel in order to force-update name | __none__ |  `admin`   | `2min/admin` |

### [help](commands/command_help)

|                          Description                          |                                        Argument                                         | Accessible | Cooldown |
| :-----------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------: | :------: |
| Returns a help-list if specified returns specific description | __variables/attributes/pipes/structures__,<br /> __@command/@vrbl/@attr/@pipe/@struct__ | `everyone` |  `none`  |

### [ignore](commands/command_ignore)

|                            Description                             |               Argument                | Accessible | Cooldown |
| :----------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | __!channel\_name \| @category\_name__ |  `admin`   |  `none`  |

### [ignored](commands/command_ignored)

|         Description          | Argument | Accessible | Cooldown |
| :--------------------------: | :------: | :--------: | :------: |
| Displays all ignored members | __none__ | `everyone` |  `none`  |

### [join](commands/command_join)

|                            Description                             |               Argument                | Accessible | Cooldown |
| :----------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Create ignore channel or sets as ignore channel or ignore a member | __!channel\_name \| @category\_name__ |  `admin`   |  `none`  |

### [joke](commands/command_joke)

|     Description     |   Argument    | Accessible | Cooldown |
| :-----------------: | :-----------: | :--------: | :------: |
| Replies with a joke | __@category__ | `everyone` |  `none`  |
> Note that category can be dad, chuck or blonde

### [leaderboard](commands/command_leaderboard)

|             Description             |        Argument        | Accessible | Cooldown |
| :---------------------------------: | :--------------------: | :--------: | :------: |
| Replies with the top 10 leaderboard | __@number_of_members__ | `everyone` |  `none`  |

### [leave](commands/command_leave)

|            Description            | Argument | Accessible | Cooldown |
| :-------------------------------: | :------: | :--------: | :------: |
| Removes Portal from voice channel | __none__ | `everyone` |  `none`  |

### [level](commands/command_level)

|    Description     | Argument | Accessible | Cooldown |
| :----------------: | :------: | :--------: | :------: |
| Returns your level | __none__ | `everyone` |  `none`  |

### [music](commands/command_music)

|                              Description                              |               Argument                | Accessible | Cooldown |
| :-------------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new music channel or sets<br />the current channel as music | __@channel\_name \| @category\_name__ |  `admin`   |  `none`  |

### [ping](commands/command_ping)

|                 Description                 | Argument | Accessible | Cooldown |
| :-----------------------------------------: | :------: | :--------: | :------: |
| Pings Portal and returns round trip latency | __none__ | `everyone` |  `none`  |

### [portal](commands/command_portal)

|                               Description                               |               Argument                | Accessible | Cooldown |
| :---------------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new portal channel or sets<br />the current channel as portal | __@channel\_name \| @category\_name__ |  `admin`   |  `none`  |

### [prefix](commands/command_prefix)

|         Description          |  Argument   | Accessible | Cooldown |
| :--------------------------: | :---------: | :--------: | :------: |
| Set the prefix of the server | __!prefix__ |  `admin`   |  `none`  |

### [ranks](commands/command_ranks)

|           Description           | Argument | Accessible | Cooldown |
| :-----------------------------: | :------: | :--------: | :------: |
| Returns ranks of ranking system | __none__ | `everyone` |  `none`  |

### [role_assigner ](commands/command_role_assigner )

|                          Description                           |    Argument    | Accessible | Cooldown |
| :------------------------------------------------------------: | :------------: | :--------: | :------: |
| Replies with a message that gives roles when an emote is added | __!role_json__ |  `admin`   |  `none`  |

### [roll](commands/command_roll)

|                  Description                  |      Argument      | Accessible | Cooldown |
| :-------------------------------------------: | :----------------: | :--------: | :------: |
| Roll follows the same philosophy as in roll20 | __!roll sequence__ | `everyone` |  `none`  |

### [run](commands/command_run)

|                     Description                      |      Argument      | Accessible | Cooldown |
| :--------------------------------------------------: | :----------------: | :--------: | :------: |
| Runs the given command string and returns its output | __!exec\_command__ | `everyone` |  `none`  |
> run is designed for you to test names before setting them to your channel

### [set_ranks](commands/command_set_ranks)

|                     Description                      | Argument | Accessible | Cooldown |
| :--------------------------------------------------: | :------: | :--------: | :------: |
| Sets roles that will be given when said level reache | __none__ |  `admin`   |  `none`  |

### [set](commands/command_set)

|          Description           |       Argument        | Accessible | Cooldown |
| :----------------------------: | :-------------------: | :--------: | :------: |
| Sets the value of an attribute | __!attribute !value__ |  `admin`   |  `none`  |
> Note that you do not have to use attribute prefix (&), as you can only set attributes

### [setup](commands/command_setup)

|                         Description                          | Argument | Accessible |   Cooldown    |
| :----------------------------------------------------------: | :------: | :--------: | :-----------: |
| Creates an announcement, spotify, url-only and music channel | __none__ |  `admin`   | `10min/admin` |

### [spotify](commands/command_spotify)

|                                Description                                |               Argument                | Accessible | Cooldown |
| :-----------------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new spotify channel or sets<br />the current channel as spotify | __@channel\_name \| @category\_name__ |  `admin`   |  `none`  |

### [state](commands/command_state)

|             Description             | Argument | Accessible | Cooldown |
| :---------------------------------: | :------: | :--------: | :------: |
| Returns the current state of Portal | __none__ | `everyone` |  `none`  |

### [url](commands/command_url)

|                            Description                            |               Argument                | Accessible | Cooldown |
| :---------------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
| Creates a new url channel or sets<br />the current channel as url | __@channel\_name \| @category\_name__ |  `admin`   |  `none`  |

### [weather](commands/command_weather)

|                       Description                        |    Argument     | Accessible | Cooldown |
| :------------------------------------------------------: | :-------------: | :--------: | :------: |
| Replies with the current wheather for the requested city | __!city\_name__ | `everyone` |  `none`  |

### [whoami](commands/command_whoami)

|                   Description                   | Argument | Accessible | Cooldown |
| :---------------------------------------------: | :------: | :--------: | :------: |
| Replies with the your personal information card | __none__ | `everyone` |  `none`  |
