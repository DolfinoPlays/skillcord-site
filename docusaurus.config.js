const config = {
  title: 'Skillcord',
  tagline: 'Turn your Discord server into a progression system.',
  favicon: 'img/favicon.svg',

  url: 'https://YOUR_GITHUB_USERNAME.github.io',
  baseUrl: '/skillcord-site/',

  organizationName: 'YOUR_GITHUB_USERNAME',
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
      logo: {
        alt: 'Skillcord Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/docs/commands', label: 'Commands', position: 'left'},
        {href: 'YOUR_INVITE_LINK_HERE', label: 'Invite', position: 'right'},
        {href: 'YOUR_SUPPORT_SERVER_LINK_HERE', label: 'Support', position: 'right'},
        {href: 'YOUR_GITHUB_REPO_URL_HERE', label: 'GitHub', position: 'right'},
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
            {label: 'Invite Skillcord', href: 'YOUR_INVITE_LINK_HERE'},
            {label: 'Support Server', href: 'YOUR_SUPPORT_SERVER_LINK_HERE'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'YOUR_GITHUB_REPO_URL_HERE'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skillcord.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  }),
};

module.exports = config;
