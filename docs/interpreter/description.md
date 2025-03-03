---
id: description
title: Description
sidebar_label: Description
---

Text Interpreter is a program used by Portal when asked to generate
a channel's name. For example if you have set your voices name to
`./set v.regex $status_list` portal knows thats `status_list` is a
variable, as it is preceded by the symbol _$_  (portal can read variables,
attributes, pipes and structures as seen bellow).<br />
So lets say you are playing Counter Strike, your channel's name will be
__CS:GO__.

### [Variables](objects/variables/description.md)

| prefix |                           Description                           |   Format    |       Example `$status_list`       |
| :----: | :-------------------------------------------------------------: | :---------: | :--------------------------------: |
|   $    | _Variables are immutable and live data that return information_ | `$variable` | `CS:GO`<br />or<br />`CS:GO, Apex` |

### [Attributes](objects/attributes/description.md)

| prefix |                                                      Description                                                       |    Format    | Example `@g.locale` |
| :----: | :--------------------------------------------------------------------------------------------------------------------: | :----------: | :-----------------: |
|   &    | _Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance_ | `&attribute` |        `gr`         |

### [Pipes](objects/pipes/description.md)

| prefix |                                      Description                                      | Format | Example @g.locale \| upperCase |
| :----: | :-----------------------------------------------------------------------------------: | :----: | :----------------------------: |
|   \|   | _Pipes are mini functions you can pass text or Variables to manipulate their outcome_ | \|pipe |              `GR`              |

### [Structures](objects/structures/description.md)

| prefix | suffix |                  Description                   |
| :----: | :---: | :--------------------------------------------: |
|   \{\{   |  \}\}   | _Structures are conditional flow manipulators_ |

### Combined

Combining everything in one naming guideline it would look something like this:<br />

```
$status_list / &g.locale / &g.locale|upperCase
```

will become
```
CS:GO / gr / GR
```