---
id: descriptions
title: Description
sidebar_label: Description
slug: /
---

## How to communicate with Portal

You can interact with portal only via a text channel.
Portal **does not** respond to private messages.
You can make a request (command) by typing your prefix
(default: `./`) followed by the command, for example: `./help`.

## [Commands](commands/description)

Portal has many different commands, with many different functions.
From commands that inform you about real world data to commands
such as _music_ that have a lasting effect as it spawns a music
channel.<br /><br />
_To see the full list of commands click [here](commands/description)._

## [Text Interpreter](interpreter/description)

Text Interpreter is a program used by Portal when asked to generate
a channel name. For example if you have set your voices name to
`./set v.regex $status_list` portal knows thats
[status_list](/docs/interpreter/objects/variables/detailed/status/status_list)
is a variable, as it is proceded by the symbol _$_ (portal can read variables,
attributes, pipes and structures as seen bellow).<br />
So lets say you are playing Counter Strike, your channel's name will be
**CS:GO**.<br /><br />
_To see the full documentation click [here](interpreter/description)._

## [Ranking System](/docs/ranking)

Portal's leveling system tracks messages sent and minutes spent in server's
voice channels. Different actions ammount to different points that give you
levels which then give you roles.<br /><br />
_To see the full documentation click [here](ranking)._

## [Music Player](/music-player)

Portal's music player is a single channel message.
You can play songs just by typing what as a channel message.
Portal accepts _plain text_, _youtube video links_, _youtube playlist links_
and even _portal_video_queue.json_ (which is an exported playlist from portal itself).
To make any action you just react to the music player.<br /><br />
_To see the full documentation click [here](/docs/commands/detailed/music)._

<!-- ---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

::: -->
