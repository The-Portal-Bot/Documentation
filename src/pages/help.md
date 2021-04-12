---
id: help
title: Help
sidebar_label: Help
---

## Documentation

Full detailed Documentation [here](/docs)

---

## Discord Server

You can join the [Official Discord Server](https://discord.com/invite/WrMUzJYyzJ)
and get answers to your questions

---

## Error Reporting & Feature requests

Error reporting and feature requests can be made through
[Github issues](https://github.com/keybraker/Portal/issues) or in
the [official Discord Server](https://discord.com/invite/WrMUzJYyzJ)

---

## FAQ

### Q. **What does Portal do ?**

#### A. It is a multipurpose Discord bot that helps you manage and organise your server,gives you informative commands but also fun ones and has a the easiest to use and most intuitive music player.

It provides:

- Voice channels on demand (automatic naming, update, deletion) [./portal](/docs/commands/detailed/portal)
- Give and remove roles from users with a single reaction [./vendor](/docs/commands/detailed/vendor)
- Creates temporary "focus" channels for private conversations [./focus](/docs/commands/detailed/focus)
- Music player that is clean and clutter free [./music](/music-player)
- Get the latest on [covid19](/docs/commands/detailed/corona),
  [weather](/docs/commands/detailed/weather), [crypto](/docs/commands/detailed/crypto), [news](/docs/commands/detailed/news) and more
- [ignored](/docs/commands/detailed/ignore), [announcement](/docs/commands/detailed/announcement)
  , [url-only](/docs/commands/detailed/url) channels
- You can create moderators easily who can kick, ban and create customisable server invites<br />without ever giving them any permission just one role `p.mod`
- A [ranking system](/docs/ranking) that allows you to give roles according to levels
- Easily create server [polls](/docs/commands/detailed/poll)
- _Much more_

---

### Q. **How can I give members authority ?**

#### A. You have to create roles `p.admin` , `p.mod`, `p.dj`, `p.whitelist` and `p.ignore` and assign them to users.

| to             | give role     | description                                                                                                                                                                             |
| :------------- | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| make admin     | `p.admin`     | An admin can use all the authorised commands                                                                                                                                            |
| make moderator | `p.mod`       | A moderator can [kick](/docs/commands/detailed/kick) and [ban](/docs/commands/detailed/ban) members, can generate [invites](/docs/commands/detailed/invite) and change auto-mod options |
| make dj        | `p.dj`        | A dj controls the music player without votes                                                                                                                                            |
| whitelist      | `p.whitelist` | A whitelisted member will be excluded from spam moderation                                                                                                                              |
| ignore         | `p.ignore`    | An ignored member will be ignored by Portal                                                                                                                                             |

---

### Q. **How do I create portal controlled channel ?**

#### A. All portal channels are spawned in the same manner.

Create a new portal (voice) that spawns voice channels

1. will create a new portal channel named **my_portal**

   ```bash
   ./portal my_portal
   ```

2. will create a new portal channel named **my_portal** and category **my_category** and make **my_portal** as child

   ```bash
   ./portal my_portal | my_category
   ```

Create a new music/announcement (text)

1. will make current channel music/announcement

   ```bash
   ./music
   ```

2. will create a new requested type channel named **my_channel** and category **my_category** and make **my_portal** as child

   ```bash
   ./music my_channel
   ```

3. will create a new requested type channel named **my_channel** and category **my_category** and make **my_channel** as child

   ```bash
   ./music my_channel | my_category
   ```

---

### Q. **How do I remove a channel from its category ?**

#### A. You just have to write a message inside the channel with the category name

For example lets say that you have a channel called _my-music_ which is the music channel,
you just have to type `./music` and the channel will no longer be the music channel.

---

### Q. **How do I play music from music channel ?**

#### A. First create a music channel and then just type the song you want.

Portal's music player resides in a text channel. Rather than requesting
a song via a command you simply type the song you wish to listen to, in the
music channel, and portal magically appear and play it for you.

Guide

1. Create a music channel by simply typing _(if it doesn't exist)_

   ```
   ./music my music channel
   ```

2. Go to the newly created music channel _(run command `./state` to locate it)_

3. Type in plain text the name of the song you want to listen too
