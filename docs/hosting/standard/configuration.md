---
id: configuration
title: Configuration
sidebar_label: Configuration
---

1. Add the API keys from the services you want.

   ```json title="Portal/src/config.json"
   {
     "version": "0.6.8", // current version
     "token": "add-your-token-here", // your Discord-API-Token
     "prefix": "./", // default prefix
     "mongo_url": "mongodb://mongo/portal?compressors=zlib&gssapiServiceName=portal", // mongoDB url
     "owner_id": "add-your-id-(optional)", // owner ID may be used throughout Portal
     "api_keys": {
       // Api keys for Portal services
       "OpenWeatherMap": "add-open-weather-map-api-key",
       "covid_193": "add-covid-193-api-key",
       "lyrics": "add-genius-api-key",
       "coingecko": "add-coingecko-api-key",
       "football_data": "add-football-data-api-key",
       "yahoo_finance": "add-yahoo-finance-api-key",
       "new_york_times": "add-new-york-time-api-key",
       "translate": {
         "engine": "yandex",
         "key": "add-yeandex-api-key"
       }
     },
     "delete_delay": 7, // how long after message sent, will it be deleted
     "debug": false, // display run time information in console
     "log": false // log files in ../logs directory on host
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
