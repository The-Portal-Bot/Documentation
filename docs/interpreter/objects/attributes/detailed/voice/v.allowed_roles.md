---
id: v.allowed_roles
title: v.allowed_roles
sidebar_label: v.allowed_roles
---

### Description

The role users must have in order to enter the voice channel.

* Default: `true`
* Clearance: `voice`

### Options

You can set it to a role in the server you are in.

:::tip

It is important to point out that whether you are stripped of a role you set as allowed_roles
or in case the role gets deleted, you will be able to always enter your portal channel as the
creator of it and updated its attributes.

:::

:::info

Allowed roles is used for users. In case you want to not allow bots to enter your channel
set attribute [no_bots](/docs/interpreter/objects/attributes/detailed/voice/v.no_bots) to false.

:::