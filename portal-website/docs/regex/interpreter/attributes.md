---
id: attributes
title: Attributes
sidebar_label: Attributes
---

### Description

| prefix |                                                     Description                                                      |    Format    | Example `&g.locale` |
| :----: | :------------------------------------------------------------------------------------------------------------------: | :----------: | :-----------------: |
|   &    | Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance | `&attribute` |        `gr`         |

### List of Attributes

| Attributes          | Description                                                    | Type    | Default                                |
| :------------------ | :------------------------------------------------------------- | :------ | :------------------------------------- |
| `p.ann_announce`    | _if announcements will be made in voices of portal_            | boolean | _true_                                 |
| `v.ann_announce`    | _if announcements will be made in voice_                       | boolean | _true_                                 |
| `p.ann_user`        | _if join/leave announcements will be made in voices of portal_ | boolean | _true_                                 |
| `v.ann_user`        | _if join/leave announcements will be made in voice_            | boolean | _true_                                 |
| `p.no_bots`          | _whether bots can join voices of portal_                       | boolean | _false_                                |
| `v.no_bots`          | _whether bots can join voice_                                  | boolean | _false_                                |
| `p.render`          | _whether Portal will render name voices of portal_             | boolean | _true_                                 |
| `v.render`          | _whether Portal will render name voice_                        | boolean | _true_                                 |
| `v.bitrate`         | _if voice's current bitrate_                                   | number  | _96000_                                |
| `g.prefix`          | _Portal's prefix_                                              | string  | _./_                                   |
| `g.locale`          | _global locale_                                                | enum    | _gr_, _en_, _de_                       |
| `p.locale`          | _portal's locale_                                              | enum    | _gr_, _en_, _de_                       |
| `v.locale`          | _voice's locale_                                               | enum    | _gr_, _en_, _de_                       |
| `v.position`        | _voice's position in discord_                                  | enum    | _gr_, _en_, _de_                       |
| `p.regex_overwrite` | _if spawned portal will be overwritten by personal regexs_     | boolean | _false_                                |
| `p.regex`           | _regex guidelines for portal's title_                          | boolean | _G$#-P$member\_count \| $status\_list_ |
| `p.v.regex`         | _regex guidelines for portal's voice's titles_                 | boolean | _G$#-P$member\_count \| $status\_list_ |
| `v.regex`           | _regex guidelines for voice's title_                           | boolean | _G$#-P$member\_count \| $status\_list_ |
| `m.regex`           | _regex guidelines for user's voice's title_                    | boolean | _(nothing)_                            |
| `p.user_limit`      | _max number of members for portal's voices_                    | number  | _0_ (infinite)                         |
| `v.user_limit`      | _max number of members for voice_                              | number  | _0_ (infinite)                         |
