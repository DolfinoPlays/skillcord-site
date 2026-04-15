const config = {
  title: 'Skillcord',
  tagline: 'Turn your Discord server into a progression system.',
  favicon: 'img/favicon.svg',

  url: 'https://DolfinoPlays.github.io',
  baseUrl: '/skillcord-site/',

  organizationName: 'DolfinoPlays',
  projectName: 'skillcord-site',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/skillcord-social-card.svg',
    navbar: {
      title: 'Skillcord',
      style: 'dark',
      items: [
        {
          label: 'Home',
          to: '/',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          type: 'doc',
          docId: 'intro',
          label: 'Docs',
          position: 'left',
        },
        {
          label: 'Commands',
          to: '/docs/commands',
          position: 'left',
          activeBaseRegex: '^/docs/commands/?$',
        },
        {
          href: 'https://discord.com/oauth2/authorize?client_id=1337481384674984026',
          label: 'Invite',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting Started', to: '/docs/admin/getting-started'},
            {label: 'Permissions Setup', to: '/docs/admin/permissions'},
            {label: 'Commands', to: '/docs/commands'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Invite Skillcord', href: 'https://discord.com/oauth2/authorize?client_id=1337481384674984026'},
            {label: 'Support Server', href: 'https://discord.gg/AcacMuTYBu'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/DolfinoPlays/skillcord-site'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skillcord.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
      respectPrefersColorScheme: false,
    },
  }),
};

module.exports = config;
