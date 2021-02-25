---
id: commands
title: Commands
sidebar_label: All Commands
---

**Portal prefix: ./ *(default)***

### about

> Description: _Returns an about Portal message_<br />
> Arguments  : _none_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### announce

> Description: _Announceces whatever is given by the writter to online members_<br />
> Arguments  : _@title \| @body_<br />
> Accessible : _everyone_<br />
> Cooldown   : _1 minute per user_<br />

### announcement

> Description: _Creates a new or sets the current channel as announcement_<br />
> Arguments  : _@channel\_name \| @category\_name_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### authorise

> Description: _Add role to admin roles_<br />
> Arguments  : _!role_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### authorised_roles

> Description: _Displayes all authorised roles_<br />
> Arguments  : _none_  <br />
> Accessible : _everyone_<br />
> Cooldown   : _admin_<br />

### corona

> Description: _Replies with the daily state of corona virus cases_<br />
> Arguments  : _!country code (gr, de, us, etc)_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### crypto

> Description: _Replies with the current price of requested cryptocurrency_<br />
> Arguments  : _!cryptocurrency \| exchange_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### deauthorise

> Description: _Removes role from admin roles_<br />
> Arguments  : _!role_ <br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### delete

> Description: _Deletes x number of messsages on the text channel_<br />
> Arguments  : _!number of messages to delete_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### dj

> Description: _Sets given member as a dj_<br />
> Arguments  : _!member\_id_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### focus

> Description: _Creates focus channel for you and your requested user_<br />
> Arguments  : _!username @time (default 5minutes)_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### force

> Description: _Clones current channel in order to force-update name_<br />
> Arguments  : _none_  <br />
> Accessible : _admin_<br />
> Cooldown   : _2 minutes pe_r admin<br />

### help

> Description: _Returns a help-list if specified returns specific description_<br />
> Arguments  : _@command/@vrbl/@func/@pipe/@attr_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### join

> Description: _Joins current voice channel and announces events_<br />
> Arguments  : _none_<br />
> Accessible : _everyone_<br />
> Cooldown   : _1 minute per user_<br />

### joke

> Description: _Replies with a joke_<br />
> Arguments  : _@category_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### leaderboard

> Description: _Replies with the top 10 leaderboard_<br />
> Arguments  : _@number of members_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### leave

> Description: _Removes Portal from voice channel_<br />
> Arguments  : _none_  <br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### level

> Description: _Returns your level_<br />
> Arguments  : _none_  <br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### music

> Description: _Creates a new or sets the current channel as music channel_<br />
> Arguments  : _@channel\_name \| @category\_name_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### ignore

> Description: _Create ignore channel or sets as ignore channel_<br />
> Arguments  : _!channel\_name \| @category\_name_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### ignored

> Description: _Displays all ignored members_<br />
> Arguments  : _none_<br />
> Accessible : _everyone_<br />
> Cooldown   : _none_<br />

### ping

> Description: _Returns round trip latency_<br />
> Arguments  : _none_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### portal

> Description: _Create portal channel or sets as portal channel_<br />
> Arguments  : _!channel\_name \| @category\_name_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### prefix

> Description: _update the prefix of the server_<br />
> Arguments  : _!channel\_name \| @category\_name_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### ranks

> Description: _Returns ranks of ranking system_<br />
> Arguments  : _none_  <br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### role_assigner 

> Description: _Replies with a message that gives roles when an emote is added_<br />
> Arguments  : _role json_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### roll

> Description: _Roll follows the same philosophy as in roll20_<br />
> Arguments  : _!roll sequence_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### run

> Description: _Runs the given command string and returns its output_<br />
> Arguments  : _!exec\_command_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### set_ranks

> Description: _Sets roles that will be given when said level reached_<br />
> Arguments  : _rank json_<br />
> Accessible : _voice-portal owner, admin_<br />
> Cooldown   : _admin_<br />

### set

> Description: _Sets the value of an attribute_<br />
> Arguments  : _!attribute !value_<br />
> Accessible : _voice-portal owner, admin_<br />
> Cooldown   : _-_<br />

### setup

> Description: _Creates an announcement, spotify, url-only and music channel_<br />
> Arguments  : _none_  <br />
> Accessible : _admin_<br />
> Cooldown   : _10 minutes per admin_<br />

### spotify

> Description: _Creates a new or sets the current channel as spotify channel_<br />
> Arguments  : _none_  <br />
> Accessible : _none _<br />
> Cooldown   : _admin_<br />

### state

> Description: _Returns the current state of portal_<br />
> Arguments  : _@channel\_name \| @category\_name_<br />
> Accessible : _admin_<br />
> Cooldown   : _-_<br />

### url

> Description: _Creates a new or sets the current channel as url-only_<br />
> Arguments  : _@channel\_name \| @category\_name_<br />
> Accessible : _admin_<br />
> Cooldown   : _admin_<br />

### weather

> Description: _Replies with the current wheather for the requested city_<br />
> Arguments  : _!city\_name_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />

### whoami
> Description: _Replies with the your portal stats_<br />
> Arguments  : _none_<br />
> Accessible : _everyone_<br />
> Cooldown   : _-_<br />