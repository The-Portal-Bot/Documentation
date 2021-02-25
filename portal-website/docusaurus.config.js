module.exports = {
    title: 'Portal',
    tagline: 'A fully fledged and feature rich bot for Discord',
    url: 'https://portal-bot.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Ioannis Tsiakkas', // Usually your GitHub org/user name.
    projectName: 'portal', // Usually your repo name.
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
                    position: 'right',
                },
                {
                    to: 'faq/',
                    activeBasePath: 'faq',
                    label: 'Faq',
                    position: 'right',
                },
                {
                    to: 'help/',
                    activeBasePath: 'help',
                    label: 'Help',
                    position: 'right',
                },
                {
                    to: 'todo/',
                    activeBasePath: 'todo',
                    label: 'To Do',
                    position: 'right',
                },
                {
                    to: 'blog',
                    label: 'Updates',
                    position: 'right'
                },
                {
                    href: 'https://github.com/keybraker/Portal',
                    label: 'GitHub',
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
                    title: 'Community',
                    items: [{
                            label: 'Portal Official Channel',
                            href: 'https://discordapp.com/invite/docusaurus',
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
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'FAQ',
                            to: 'faq',
                        },
                        {
                            label: 'Updates',
                            href: 'updates',
                        },
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