---
id: configuration
title: Configuration
sidebar_label: Configuration
---

1. Add the API keys from the services you want.

   ```env title="Portal/src/.env"
   {
    # current version
    VERSION=0.6.8
    # your Discord-API-Token
    TOKEN=add-your-token-here
    # default prefix
    PREFIX=./
    # mongoDB url
    MONGO_URL=mongodb://mongo/portal?compressors=zlib&gssapiServiceName=portal
    # owner ID may be used throughout Portal
    OWNER_ID=add-your-id-(optional)
    # API KEYS
    OPENWEATHERMAP=add-open-weather-map-api-key
    COVID_193=add-covid-193-api-key
    LYRICS=add-genius-api-key
    COINGECKO=add-coingecko-api-key
    FOOTBALL_DATA=add-football-data-api-key
    YAHOO_FINANCE=add-yahoo-finance-api-key
    NEW_YORK_TIMES=add-new-york-time-api-key
    TRANSLATE_ENGINE=yandex
    # how long after message sent, will it be deleted
    TRANSLATE_KEY=add-yeandex-api-key
    # display run time information in console
    DELETE_DELAY=7
    # log files in ../logs directory on host
    DEBUG=false
    LOG=falsE
   }
   ```

:::caution

Keep in mind that mongo_url by default is set to link to docker container, in case you are running it as a standalone app, you shall give the url of the mongo database

:::

:::info

Note that if you do not want to use an api, go to `Portal/src/config.command.json` and delete the command corelating to the missing api (ex. covid_193 -> corona).

:::

2. Go to `Portal/src/config.command.json` and remove commands you do not want Portal to have

3. Go to and set the spamming guidelines to whatever you want them to be

   ```json title="Portal/src/config.command.json"
   {
     "dupl_after": 2, // number of duplicates to warn
     "warn_after": 3, // number of spam messages to warn
     "mute_after": 5, // mute member after 5 messages
     "mute_period": 2, // mute period in minutes
     "kick_after": 0, // number of spam messages to kick
     "ban_after": 0, // number of spam messages to ban
     "message_interval": 1000 // interval in ms between messages to consider spam
   }
   ```

4. We encourage you, to not alter `Portal/src/config.event.json` as all events are needed for Portal to function properly
