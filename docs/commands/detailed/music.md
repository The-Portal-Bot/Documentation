---
id: music
title: music
sidebar_label: music
---

|                              Description                              |         Argument          | Accessible | Cooldown |
| :-------------------------------------------------------------------: | :-----------------------: | :--------: | :------: |
| Creates a new music channel or sets<br />the current channel as music | **!channel \| @category** |  `admin`   |  `none`  |

## Examples

- Lets say you want to create a new music channel, you would type

  ```bash
  /music music_player
  ```

  This would create a new music channel called _music_player_.

- Lets say you want to create a new music channel under a category, you would type

  ```bash
  /music music_player | music
  ```

  This would create a new music channel called _music_player_ under category _music_.

## Music Channel Input

When you have created a music channel you can enter the following data

|     | input                                                                    |
| :-- | :----------------------------------------------------------------------- |
| 1   | **video name** from youtube                                              |
| 2   | **youtube video url**                                                    |
| 3   | **youtube playlist url**                                                 |
| 4   | **portal_video_queue.json** which you can get from pressing the ⬇️ emote |

## Music Message Emotes

| emote | function                                                                               |
| :---- | :------------------------------------------------------------------------------------- |
| ▶️    | **play** starts player or continues if already playing                                 |
| ⏸     | **pause** pauses player if playing                                                     |
| ⏭     | **skip** skips player to next queued song or starts queued video if nothing is playing |
| 📌    | **pin** pin song to place _( put it on repeat )_                                       |
| 📄    | **lyrics** get lyrics if current video is a song _( by genius.com )_                   |
| ⬇️    | **download** download queue in a json. Drag and drop it inside channel to add it again |
| 🧹    | **clear queue**                                                                        |
| 🚪    | **leave** order Portal to leave current session _( will also clear queue )_            |
