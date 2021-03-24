---
id: description
title: Attributes
sidebar_label: Description
---

| prefix |                                                      Description                                                       |    Format    | Example `&g.locale` |
| :----: | :--------------------------------------------------------------------------------------------------------------------: | :----------: | :-----------------: |
|   &    | _Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance_ | `&attribute` |        `gr`         |

Attributes have three categories _global, portal, voice and member_. You can recognise the category of an attribute by the prefix in its name, for example ___p.locale___ refers to the locale of the portal whereas ___g.prefix___ refers to the prefix of the bot.

## List of Attributes

## Global

---

### [g.locale](/docs/interpreter/objects/attributes/detailed/global/g.locale)

|   Description   | Type  |     Default      | Clearance |
| :-------------: | :---: | :--------------: | :-------: |
| _global locale_ | enum  | _gr_, _en_, _de_ |  `admin`  |

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

##  Member

---

### [m.regex](/docs/interpreter/objects/attributes/detailed/member/m.regex)

|                 Description                 |  Type   |   Default   | Clearance |
| :-----------------------------------------: | :-----: | :---------: | :-------: |
| _regex guidelines for user's voice's title_ | boolean | _(nothing)_ |  `none`   |

## Portal

---

### [p.ann_announce](/docs/interpreter/objects/attributes/detailed/portal/p.ann_announce)

|                     Description                     |  Type   | Default | Clearance |
| :-------------------------------------------------: | :-----: | :-----: | :-------: |
| _if announcements will be made in voices of portal_ | boolean | _true_  | `portal`  |
 
### [p.ann_user](/docs/interpreter/objects/attributes/detailed/portal/p.ann_user)

|                          Description                           |  Type   | Default | Clearance |
| :------------------------------------------------------------: | :-----: | :-----: | :-------: |
| _if join/leave announcements will be made in voices of portal_ | boolean | _true_  | `portal`  |

### [p.locale](/docs/interpreter/objects/attributes/detailed/portal/p.locale)

|    Description    | Type  |     Default      | Clearance |
| :---------------: | :---: | :--------------: | :-------: |
| _portal's locale_ | enum  | _gr_, _en_, _de_ | `portal`  |

### [p.no_bots](/docs/interpreter/objects/attributes/detailed/portal/p.no_bots)

|               Description                |  Type   | Default | Clearance |
| :--------------------------------------: | :-----: | :-----: | :-------: |
| _whether bots can join voices of portal_ | boolean | _false_ | `portal`  |

### [p.regex_overwrite](/docs/interpreter/objects/attributes/detailed/portal/p.regex_overwrite)

|                        Description                         |  Type   | Default | Clearance |
| :--------------------------------------------------------: | :-----: | :-----: | :-------: |
| _if spawned portal will be overwritten by personal regexs_ | boolean | _false_ | `portal`  |

### [p.regex](/docs/interpreter/objects/attributes/detailed/portal/p.regex)

|              Description              |  Type   |                Default                 | Clearance |
| :-----------------------------------: | :-----: | :------------------------------------: | :-------: |
| _regex guidelines for portal's title_ | boolean | _G$#-P$member\_count \| $status\_list_ | `portal`  |

### [p.render](/docs/interpreter/objects/attributes/detailed/portal/p.render)

|                    Description                     |  Type   | Default | Clearance |
| :------------------------------------------------: | :-----: | :-----: | :-------: |
| _whether Portal will render name voices of portal_ | boolean | _true_  | `portal`  |

### [p.user_limit](/docs/interpreter/objects/attributes/detailed/portal/p.user_limit)

|                 Description                 |  Type  |    Default     | Clearance |
| :-----------------------------------------: | :----: | :------------: | :-------: |
| _max number of members for portal's voices_ | number | _0_ (infinite) | `portal`  |

### [p.v.regex](/docs/interpreter/objects/attributes/detailed/portal/p.v.regex)

|                  Description                   |  Type   |                Default                 | Clearance |
| :--------------------------------------------: | :-----: | :------------------------------------: | :-------: |
| _regex guidelines for portal's voice's titles_ | boolean | _G$#-P$member\_count \| $status\_list_ | `portal`  |

## Voice

---

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

|   Description    | Type  |     Default      | Clearance |
| :--------------: | :---: | :--------------: | :-------: |
| _voice's locale_ | enum  | _gr_, _en_, _de_ |  `voice`  |

### [v.no_bots](/docs/interpreter/objects/attributes/detailed/voice/v.no_bots)

|          Description          |  Type   | Default | Clearance |
| :---------------------------: | :-----: | :-----: | :-------: |
| _whether bots can join voice_ | boolean | _false_ |  `voice`  |

### [v.position](/docs/interpreter/objects/attributes/detailed/voice/v.position)

|          Description          | Type  |     Default      | Clearance |
| :---------------------------: | :---: | :--------------: | :-------: |
| _voice's position in discord_ | enum  | _gr_, _en_, _de_ |  `voice`  |

### [v.regex](/docs/interpreter/objects/attributes/detailed/voice/v.regex)

|             Description              |  Type   |                Default                 | Clearance |
| :----------------------------------: | :-----: | :------------------------------------: | :-------: |
| _regex guidelines for voice's title_ | boolean | _G$#-P$member\_count \| $status\_list_ |  `voice`  |

### [v.render](/docs/interpreter/objects/attributes/detailed/voice/v.render)

|               Description               |  Type   | Default | Clearance |
| :-------------------------------------: | :-----: | :-----: | :-------: |
| _whether Portal will render name voice_ | boolean | _true_  |  `voice`  |

### [v.user_limit](/docs/interpreter/objects/attributes/detailed/voice/v.user_limit)

|            Description            |  Type  |    Default     | Clearance |
| :-------------------------------: | :----: | :------------: | :-------: |
| _max number of members for voice_ | number | _0_ (infinite) |  `voice`  |