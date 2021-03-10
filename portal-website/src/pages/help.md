---
id: help
title: Help
sidebar_label: Help
---

## Documentation

You can find the detailed Documentation [here](/docs)

---

## Discord Server

You can join the [Official Discord Server](https://discord.com/invite/nuKXgFXr5y) 
and get answers to your questions

---

## Error Reporting & Feature requests

Error reporting and feature requests can be made through github or from 
the [Official Discord Server](https://discord.com/invite/nuKXgFXr5y)

---

## FAQ

### Q. **How can I give members authority ?**
#### A. You have to create roles `p.dj`, `p.admin` and `p.ignore` and assign them to users.

| to         | give role  | description                                  |
| :--------- | :--------- | :------------------------------------------- |
| make dj    | `p.dj`     | A dj controls the music player without votes |
| make admin | `p.admin`  | An admin can use all the authorised commands |
| ignore     | `p.ignore` | An ignored member will be ignored by Portal  |

### Q. **What does Portal do ?**
#### A. Portal is a fully functional multipurpose discord bot that helps you manage and organise your server.
     
It provides:
1. Voice channels on demand (with auto-name update)
2. Assigns and strips roles from users with a single reaction
3. Creates temporary "focus" channels for private conversations
4. Music player that is clean and clutter free
5. Portal will keep you up to speed, with voice announcements
6. Get the latest on the corona virus and current weather
7. Ignored / Announcement / URL-only channels

---

### Q. **How do I create portal controlled channels ?**
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

![Docusaurus with Keytar](/gif/music.gif)
