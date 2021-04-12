---
id: description
title: Attributes
sidebar_label: Description
---

| prefix |                                                      Description                                                       |    Format    | Example `&g.locale` |
| :----: | :--------------------------------------------------------------------------------------------------------------------: | :----------: | :-----------------: |
|   &    | _Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance_ | `&attribute` |        `gr`         |

Attributes have three categories _global, portal, voice and member_. You can recognise the category of an attribute by the prefix in its name, for example **_p.locale_** refers to the locale of the portal whereas **_g.prefix_** refers to the prefix of the bot.

## List of Attributes

## Global

---

### [g.ban_after](/docs/interpreter/objects/attributes/detailed/global/g.ban_after)

|                   Description                   |  Type  | Default | Clearance |
| :---------------------------------------------: | :----: | :-----: | :-------: |
| _the penalty count at which a member is banned_ | number | _null_  |  `admin`  |

### [g.initial_role](/docs/interpreter/objects/attributes/detailed/global/g.initial_role)

|      Description       | Type | Default | Clearance |
| :--------------------: | :--: | :-----: | :-------: |
| _global starting role_ | role | _null_  |  `admin`  |

### [g.kick_after](/docs/interpreter/objects/attributes/detailed/global/g.kick_after)

|                   Description                   |  Type  | Default | Clearance |
| :---------------------------------------------: | :----: | :-----: | :-------: |
| _the penalty count at which a member is kicked_ | number | _null_  |  `admin`  |

### [g.locale](/docs/interpreter/objects/attributes/detailed/global/g.locale)

|   Description   | Type | Default | Clearance |
| :-------------: | :--: | :-----: | :-------: |
| _global locale_ | enum |  _en_   |  `admin`  |

### [g.mute_role](/docs/interpreter/objects/attributes/detailed/global/g.mute_role)

|                Description                 |   Type    | Default | Clearance |
| :----------------------------------------: | :-------: | :-----: | :-------: |
| _The role given to members when spamming._ | @role_tag | _null_  |  `admin`  |

### [g.prefix](/docs/interpreter/objects/attributes/detailed/global/g.prefix)

|    Description    |  Type  | Default | Clearance |
| :---------------: | :----: | :-----: | :-------: |
| _Portal's prefix_ | string |  _./_   |  `admin`  |

### [g.profanity_level](/docs/interpreter/objects/attributes/detailed/global/g.profanity_level)

|           Description           |  Type  |         Default         | Clearance |
| :-----------------------------: | :----: | :---------------------: | :-------: |
| _Portal's profanity strictness_ | string | _none, default, strict_ |  `admin`  |

### [g.rank_speed](/docs/interpreter/objects/attributes/detailed/global/g.rank_speed)

|           Description           |  Type  |           Default           | Clearance |
| :-----------------------------: | :----: | :-------------------------: | :-------: |
| _In what speed members rank up_ | string | _none, slow, default, fast_ |  `admin`  |

## Member

---

### [m.regex](/docs/interpreter/objects/attributes/detailed/member/m.regex)

|                 Description                 |  Type   |   Default   | Clearance |
| :-----------------------------------------: | :-----: | :---------: | :-------: |
| _regex guidelines for user's voice's title_ | boolean | _(nothing)_ |  `none`   |

## Portal

---

### [p.allowed_roles](/docs/interpreter/objects/attributes/detailed/portal/p.allowed_roles)

|               Description               |  Type   |   Default   | Clearance |
| :-------------------------------------: | :-----: | :---------: | :-------: |
| _roles allowed to enter portal channel_ | [@role] | _@everyone_ | `portal`  |

### [p.ann_announce](/docs/interpreter/objects/attributes/detailed/portal/p.ann_announce)

|                     Description                     |  Type   | Default | Clearance |
| :-------------------------------------------------: | :-----: | :-----: | :-------: |
| _if announcements will be made in voices of portal_ | boolean | _true_  | `portal`  |

### [p.ann_user](/docs/interpreter/objects/attributes/detailed/portal/p.ann_user)

|                          Description                           |  Type   | Default | Clearance |
| :------------------------------------------------------------: | :-----: | :-----: | :-------: |
| _if join/leave announcements will be made in voices of portal_ | boolean | _true_  | `portal`  |

### [p.locale](/docs/interpreter/objects/attributes/detailed/portal/p.locale)

|    Description    | Type | Default | Clearance |
| :---------------: | :--: | :-----: | :-------: |
| _portal's locale_ | enum |  _en_   | `portal`  |

### [p.no_bots](/docs/interpreter/objects/attributes/detailed/portal/p.no_bots)

|               Description                |  Type   | Default | Clearance |
| :--------------------------------------: | :-----: | :-----: | :-------: |
| _whether bots can join voices of portal_ | boolean | _false_ | `portal`  |

### [p.regex_overwrite](/docs/interpreter/objects/attributes/detailed/portal/p.regex_overwrite)

|                        Description                         |  Type   | Default | Clearance |
| :--------------------------------------------------------: | :-----: | :-----: | :-------: |
| _if spawned portal will be overwritten by personal regexs_ | boolean | _false_ | `portal`  |

### [p.regex](/docs/interpreter/objects/attributes/detailed/portal/p.regex)

|              Description              |  Type   |               Default                | Clearance |
| :-----------------------------------: | :-----: | :----------------------------------: | :-------: |
| _regex guidelines for portal's title_ | boolean | _G$#-P$member_count \| $status_list_ | `portal`  |

### [p.render](/docs/interpreter/objects/attributes/detailed/portal/p.render)

|                    Description                     |  Type   | Default | Clearance |
| :------------------------------------------------: | :-----: | :-----: | :-------: |
| _whether Portal will render name voices of portal_ | boolean | _true_  | `portal`  |

### [p.user_limit](/docs/interpreter/objects/attributes/detailed/portal/p.user_limit)

|                 Description                 |  Type  |    Default     | Clearance |
| :-----------------------------------------: | :----: | :------------: | :-------: |
| _max number of members for portal's voices_ | number | _0_ (infinite) | `portal`  |

### [p.v.allowed_roles](/docs/interpreter/objects/attributes/detailed/portal/p.v.allowed_roles)

|                                                        Description                                                        |  Type   |   Default   | Clearance |
| :-----------------------------------------------------------------------------------------------------------------------: | :-----: | :---------: | :-------: |
| _[allowed roles](/docs/interpreter/objects/attributes/detailed/voice/v.allowed_roles) given from portal to voice channel_ | [@role] | _@everyone_ | `portal`  |

### [p.v.regex](/docs/interpreter/objects/attributes/detailed/portal/p.v.regex)

|                  Description                   |  Type   |               Default                | Clearance |
| :--------------------------------------------: | :-----: | :----------------------------------: | :-------: |
| _regex guidelines for portal's voice's titles_ | boolean | _G$#-P$member_count \| $status_list_ | `portal`  |

## Voice

---

### [v.allowed_roles](/docs/interpreter/objects/attributes/detailed/voice/v.allowed_roles)

|              Description               |  Type   |   Default   | Clearance |
| :------------------------------------: | :-----: | :---------: | :-------: |
| _roles allowed to enter voice channel_ | [@role] | _@everyone_ |  `voice`  |

### [v.ann_announce](/docs/interpreter/objects/attributes/detailed/voice/v.ann_announce)

|               Description                |  Type   | Default | Clearance |
| :--------------------------------------: | :-----: | :-----: | :-------: |
| _if announcements will be made in voice_ | boolean | _true_  |  `voice`  |

### [v.ann_user](/docs/interpreter/objects/attributes/detailed/voice/v.ann_user)

|                     Description                     |  Type   | Default | Clearance |
| :-------------------------------------------------: | :-----: | :-----: | :-------: |
| _if join/leave announcements will be made in voice_ | boolean | _true_  |  `voice`  |

### [v.bitrate](/docs/interpreter/objects/attributes/detailed/voice/v.bitrate)

|         Description          |  Type  | Default | Clearance |
| :--------------------------: | :----: | :-----: | :-------: |
| _if voice's current bitrate_ | number | _96000_ |  `voice`  |

### [v.locale](/docs/interpreter/objects/attributes/detailed/voice/v.locale)

|   Description    | Type | Default | Clearance |
| :--------------: | :--: | :-----: | :-------: |
| _voice's locale_ | enum |  _en_   |  `voice`  |

### [v.no_bots](/docs/interpreter/objects/attributes/detailed/voice/v.no_bots)

|          Description          |  Type   | Default | Clearance |
| :---------------------------: | :-----: | :-----: | :-------: |
| _whether bots can join voice_ | boolean | _false_ |  `voice`  |

### [v.position](/docs/interpreter/objects/attributes/detailed/voice/v.position)

|          Description          | Type | Default | Clearance |
| :---------------------------: | :--: | :-----: | :-------: |
| _voice's position in discord_ | enum |  _en_   |  `voice`  |

### [v.regex](/docs/interpreter/objects/attributes/detailed/voice/v.regex)

|             Description              |  Type   |               Default                | Clearance |
| :----------------------------------: | :-----: | :----------------------------------: | :-------: |
| _regex guidelines for voice's title_ | boolean | _G$#-P$member_count \| $status_list_ |  `voice`  |

### [v.render](/docs/interpreter/objects/attributes/detailed/voice/v.render)

|               Description               |  Type   | Default | Clearance |
| :-------------------------------------: | :-----: | :-----: | :-------: |
| _whether Portal will render name voice_ | boolean | _true_  |  `voice`  |

### [v.user_limit](/docs/interpreter/objects/attributes/detailed/voice/v.user_limit)

|            Description            |  Type  |    Default     | Clearance |
| :-------------------------------: | :----: | :------------: | :-------: |
| _max number of members for voice_ | number | _0_ (infinite) |  `voice`  |
