import React from 'react';
import {
  NovaCompositionCoorpacademyFacebook as FacebookIcon,
  NovaCompositionCoorpacademyGooglePlus as GooglePlusIcon,
  NovaCompositionCoorpacademyInstagram as InstagramIcon,
  NovaCompositionCoorpacademyLinkedin as LinkedinIcon,
  NovaCompositionCoorpacademyMail as MailIcon,
  NovaCompositionCoorpacademyPinterest as PinterestIcon,
  NovaCompositionCoorpacademyTwitter as TwitterIcon,
  NovaCompositionCoorpacademyVimeo as VimeoIcon,
  NovaCompositionCoorpacademyYoutube as YoutubeIcon
} from '@coorpacademy/nova-icons';
import * as style from './style.module.css';

const ICONS = {
  mail: MailIcon,
  'google-plus': GooglePlusIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  vimeo: VimeoIcon,
  pinterest: PinterestIcon
} as const;

const themeStyle = {
  default: style.link,
  footer: style.linkFooter
} as const;

export type SocialLinkProps = {
  mode?: 'default' | 'footer',
  type: keyof typeof ICONS,
  link: string
};

const SocialLink: (props: SocialLinkProps) => JSX.Element = (props) => {
  const {type, link, mode = 'default'} = props;
  const IconType = ICONS[type];
  return (
    <a href={link} className={themeStyle[mode]} target="_blank" rel="noopener noreferrer">
      <IconType className={style.icon} />
    </a>
  );
};



export default SocialLink;
