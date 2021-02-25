module.exports = {
    title: 'Portal',
    tagline: 'A fully fledged and feature rich bot for Discord',
    url: 'https://portal-bot.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'keybraker',
    projectName: 'portal',
    themeConfig: {
        navbar: {
            title: 'Portal',
            logo: {
                alt: 'portal\'s logo',
                src: 'img/portal/portal_logo_legacy.png',
            },
            items: [{
                    to: 'commands/',
                    activeBasePath: 'commands',
                    label: 'Commands',
                    position: 'left',
                },
                {
                    to: 'features/',
                    activeBasePath: 'features',
                    label: 'Features',
                    position: 'left',
                },
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    to: 'help/',
                    activeBasePath: 'help',
                    label: 'Help',
                    position: 'right',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'right'
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
                    items: [{
                            label: 'Commands',
                            to: 'commands/',
                        },
                        {
                            label: 'Features',
                            to: 'features/',
                        },
                    ],
                },
                {
                    title: 'help',
                    items: [{
                            label: 'Portal Official Channel',
                            href: 'https://discord.com/invite/nuKXgFXr5y',
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/keybraker/Portal',
                        },
                        // {
                        //     label: 'Twitter',
                        //     href: 'https://twitter.com/docusaurus',
                        // },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Help',
                            to: 'help',
                        },
                        {
                            label: 'Blog',
                            to: 'blog',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Designed and Built by Ioannis Tsiakkas`,
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
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://portal-bot.xyz/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};