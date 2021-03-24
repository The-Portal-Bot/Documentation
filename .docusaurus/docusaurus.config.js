export default {
  "title": "Portal",
  "tagline": "A fully fledged and feature rich bot for Discord",
  "url": "https://portal-bot.xyz",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/portal/portal_logo.ico",
  "organizationName": "keybraker",
  "projectName": "portal",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌙",
        "darkIconStyle": {
          "marginLeft": "1px"
        },
        "lightIcon": "☀",
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      }
    },
    "navbar": {
      "title": "Portal",
      "logo": {
        "alt": "portal's logo",
        "src": "img/portal/portal_logo.png"
      },
      "items": [
        {
          "to": "commands/",
          "activeBasePath": "commands",
          "label": "Commands",
          "position": "left"
        },
        {
          "to": "interpreter/",
          "activeBasePath": "interpreter",
          "label": "Text Interpreter",
          "position": "left"
        },
        {
          "to": "music-player/",
          "activeBasePath": "music-player",
          "label": "Music Player",
          "position": "left"
        },
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Documentation",
          "position": "right"
        },
        {
          "to": "help/",
          "activeBasePath": "help",
          "label": "Help",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://discord.com/oauth2/authorize?client_id=704400876860735569&permissions=8&redirect_uri=http%3A%2F%2Fwww.localhost%3A4000%2Fpremium%2F&scope=bot",
          "label": "Add to Discord",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Commands",
              "to": "commands/"
            },
            {
              "label": "Text Interpreter",
              "to": "interpreter/"
            },
            {
              "label": "Music Player",
              "to": "music-player/"
            }
          ]
        },
        {
          "title": "Help",
          "items": [
            {
              "label": "Help",
              "to": "help"
            },
            {
              "label": "Portal Official Server",
              "href": "https://discord.com/invite/nuKXgFXr5y"
            },
            {
              "label": "Github",
              "href": "https://github.com/keybraker/Portal"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "Top.gg",
              "href": "https://top.gg/bot/704400876860735569"
            }
          ]
        },
        {
          "title": "Support",
          "items": [
            {
              "label": "PaypalMe",
              "to": "https://www.paypal.com/paypalme/tsiakkas"
            },
            {
              "label": "Github Sponsor",
              "href": "https://github.com/sponsors/keybraker"
            }
          ]
        }
      ],
      "copyright": "<br />Copyright © 2020 - 2021<br />Designed and Built by Ioannis Tsiakkas"
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/keybraker/Documents/Portal-Documentation/sidebars.js",
          "editUrl": "https://portal-bot.xyz/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://portal-bot.xyz/blog/"
        },
        "theme": {
          "customCss": "/home/keybraker/Documents/Portal-Documentation/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};