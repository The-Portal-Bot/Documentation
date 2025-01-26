module.exports = {
    title: 'Portal',
    tagline: 'A fully fledged and feature rich bot for Discord',
    url: 'https://portal-bot.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/portal/portal_logo.ico',
    organizationName: 'keybraker',
    projectName: 'portal',
    themeConfig: {
        // algolia: {
        //     apiKey: 'YOUR_API_KEY',
        //     indexName: 'YOUR_INDEX_NAME',

        //     // Optional: see doc section bellow
        //     contextualSearch: true,

        //     // Optional: Algolia search parameters
        //     searchParameters: {},

        //     //... other Algolia params
        // },
        colorMode: {
            // "light" | "dark"
            defaultMode: 'dark',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: true,

            // // Dark/light switch icon options
            // switchConfig: {
            //     // Icon for the switch while in dark mode
            //     darkIcon: '\u{200B}',//'\u{1F319}',

            //     // CSS to apply to dark icon,
            //     // React inline style object
            //     // see https://reactjs.org/docs/dom-elements.html#style
            //     darkIconStyle: {
            //         marginLeft: '1px',
            //     },

            //     // Unicode icons such as '\u2600' will work
            //     // Unicode with 5 chars require brackets: '\u{1F602}'
            //     lightIcon: '\u{200B}',//'\u2600',

            //     lightIconStyle: {
            //         marginLeft: '1px',
            //     },
            // },
        },
        navbar: {
            title: 'Portal',
            logo: {
                alt: 'portal\'s logo',
                src: 'img/portal/portal_logo.png',
            },
            items: [
                // {
                //     to: 'features/',
                //     activeBasePath: 'features',
                //     label: 'Features',
                //     position: 'left',
                // },
                {
                    to: 'commands/',
                    activeBasePath: 'commands',
                    label: 'Commands',
                    position: 'left',
                },
                {
                    to: 'music-player/',
                    activeBasePath: 'music-player',
                    label: 'Music Player',
                    position: 'left',
                },
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'right',
                },
                {
                    to: 'help/',
                    activeBasePath: 'help',
                    label: 'Help',
                    position: 'right',
                },
                {
                    href: 'https://discord.com/oauth2/authorize?client_id=704400876860735569&permissions=8&redirect_uri=http%3A%2F%2Fwww.localhost%3A4000%2Fpremium%2F&scope=bot',
                    label: 'Add to Discord',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                title: 'Docs',
                items: [
                    {
                        label: 'Commands',
                        to: 'commands/',
                    },
                    {
                        label: 'Music Player',
                        to: 'music-player/',
                    }
                ]
            },
            {
                title: 'Help',
                items: [{
                    label: 'Help',
                    to: 'help',
                }, {
                    label: 'Portal Official Server',
                    href: 'https://discord.com/invite/WrMUzJYyzJ',
                },
                {
                    label: 'Github',
                    href: 'https://github.com/keybraker/Portal',
                }
                ]
            },
            {
                title: 'More',
                items: [
                {
                    label: 'top.gg',
                    href: 'https://top.gg/bot/704400876860735569',
                },
                {
                    label: 'bots.gg',
                    href: 'https://discord.bots.gg/bots/704400876860735569',
                }
                ]
            },
            {
                title: 'Support',
                items: [{
                    label: 'PaypalMe',
                    to: 'https://www.paypal.com/paypalme/tsiakkas',
                },
                {
                    label: 'Github Sponsor',
                    href: 'https://github.com/sponsors/keybraker',
                }
                ]
            },
            {
                title: 'Policies',
                items: [{
                    label: 'Terms and Service',
                    to: 'termsofservice',
                },
                {
                    label: 'Privacy Policy',
                    href: 'privacypolicy',
                }
                ]
            }
            ],
            copyright: `<br />Copyright © 2020 - ${new Date().getFullYear()}<br />Designed and Built by <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://itsiakkas.com"
                className="
                    italic text-sm font-extrabold hover:underline
                    text-cinema-dark dark:text-cinema-light text-wrap
                "
                >
                    Keybraker
                </a>`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://portal-bot.xyz/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};