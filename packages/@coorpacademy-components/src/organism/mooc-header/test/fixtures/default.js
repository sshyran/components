import SearchBar from '../../../../molecule/search/test/fixtures/with-value';

const research = SearchBar.props;

export default {
  props: {
    logo: {
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491561426926.svg',
      srcMobile: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491561428898.svg',
      href: '#'
    },
    search: {
      ...research,
      onChange: value => console.log(value),
      onFocus: () => console.log('on Focus'),
      onBlur: () => console.log('blur')
    },
    onSubmitSearch: () => console.log('onSubmitSearch'),
    onResetSearch: () => console.log('onResetSearch'),
    themes: [
      {
        title: 'Digital',
        selected: true
      },
      {
        title: 'All',
        href: '#',
        selected: false
      },
      {
        title: 'Esprit du temps',
        href: '#',
        selected: false
      },
      {
        title: 'Gérer son épargne',
        href: '#',
        selected: false
      }
    ],
    pages: {
      displayed: [
        {
          title: 'Explore',
          href: '#',
          selected: true
        },
        {
          title: 'Battles',
          href: '#',
          selected: false
        }
      ],
      more: [
        {
          title: 'News',
          href: '#',
          selected: false
        },
        {
          title: 'Médias',
          href: '#',
          selected: false
        },
        {
          title: 'Discussions',
          href: '#',
          selected: false
        },
        {
          title: 'FAQ',
          href: '#',
          selected: false
        }
      ]
    },
    links: [
      {
        submitValue: 'Connexion',
        href: '#',
        target: '_self',
        light: false,
        small: true,
        secondary: true
      },
      {
        submitValue: 'Inscription',
        href: '#',
        target: '_self',
        light: false,
        small: true,
        secondary: false
      }
    ],
    settings: [
      {
        title: 'Language',
        type: 'select',
        options: {
          onChange: value => console.log(value),
          values: [
            {
              name: 'Pouet',
              value: 'Pouet',
              selected: false
            },
            {
              name: 'Pouet2',
              value: 'Pouet2',
              selected: true
            },
            {
              name: 'Pouet3',
              value: 'Pouet3',
              selected: false
            }
          ]
        }
      },
      {
        title: 'Mon compte',
        type: 'link',
        options: {
          target: '_blank',
          href: 'https://google.fr'
        }
      },
      {
        title: 'Se déconnecter',
        type: 'link',
        options: {
          href: 'https://google.fr'
        }
      },
      {
        title: 'Godmode',
        type: 'switch',
        options: {
          onChange: value => console.log(value),
          value: true
        }
      },
      {
        title: 'Fast slides',
        type: 'switch',
        options: {
          onChange: value => console.log(value),
          value: false
        }
      }
    ]
  }
};
