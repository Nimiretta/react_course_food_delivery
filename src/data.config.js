import InstagramIcon from './assets/icons/instagram.svg?react';
import TwitterIcon from './assets/icons/twitter.svg?react';
import YoutubeIcon from './assets/icons/youtube.svg?react';

export const navItems = ['Home', 'Menu', 'Company', 'Login'];

export const footerLinkBlocks = [
  {
    title: 'Company',
    items: [
      { name: 'Home', link: '#' },
      { name: 'Order', link: '#' },
      { name: 'FAQ', link: '#' },
      { name: 'Contact', link: '#' },
    ],
  },
  {
    title: 'Template',
    items: [
      { name: 'Style Guide', link: 'https://www.google.com/ ' },
      { name: 'Changelog', link: 'https://www.google.com/ ' },
      { name: 'Licence', link: 'https://www.google.com/ ' },
      { name: 'Webflow University', link: 'https://www.google.com/ ' },
    ],
  },
  {
    title: 'Flowbase',
    items: [{ name: 'More Cloneables', link: '#' }],
  },
];

export const footerSocialLinks = [
  { href: '#', imgComponent: InstagramIcon },
  { href: '#', imgComponent: TwitterIcon },
  { href: '#', imgComponent: YoutubeIcon },
];

export const mainPhoneNumber = '+1 (202) 516-45-78';
