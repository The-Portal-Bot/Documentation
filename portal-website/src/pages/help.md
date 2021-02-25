---
id: help
title: Help
sidebar_label: Help
---

## Discord Server

You can join the [Official Discord Server](https://discord.com/invite/nuKXgFXr5y) 
and get answers to your questions

---

## Error Reporting

Error reporting and feature requests can be made through github or from 
the [Official Discord Server](https://discord.com/invite/nuKXgFXr5y)

---

## FAQ

### Q. **What does Portal do ?**
#### A. Portal is a fully functional multipurpose discord bot that helps you manage and organise your server
     
It provides:
1. Voice channels on demand (with auto-name update)
2. Assigns and strips roles from users with a single reaction
3. Creates temporary "focus" channels for private conversations
4. Music player that is clean and clutter free
5. Portal will keep you up to speed, with voice announcements
6. Get the latest on the corona virus and current weather
7. Spotify / Announcement / URL-only channels

---

### Q. **How do I create portal controlled channels ?**
#### A. All portal channels are spawned in the same manner
 
Create a new portal (voice) that spawns voice channels
1. `./portal my_portal` 
    will create a new portal channel named **my_portal**
2. `./portal my_portal | my_category`
    will create a new portal channel named **my_portal** and category **my_category** and make **my_portal** as child

Create a new music/announcement/spotify (text)
1. `./music`
    will make current channel music/announcement/spotify
2. `./music my_channel`
    will create a new requested type channel named **my_channel** and category **my_category** and make **my_portal** as child
3. `./music my_channel| my_category`
    will create a new requested type channel named **my_channel** and category **my_category** and make **my_channel** as child

---

### Q. **How do I remove a channel from its category ?**
#### A. By typing the category it is as a comment `./announcement`

---

### Q. **How do I play music from music channel ?**
#### A. Music channel is a text channel where you can Portal's music player resides
    
Guide
1. Find and enter music channel, in case you cant find it
  1.1  run command `./state` to locate it
  1.2 in case it does not exist create one with `./music my_music`
2. Type in plain text the name of the song you want to listen too
  *make sure you are inside a Portal controlled voice channel*

---

### Q. **How do I interact with music player ?**
#### A. In music channel resides the music player, by reacting with given reactions you can**play**, **pause**, **skip**, **clear queue** and **portal disconnect** list and disconnect player