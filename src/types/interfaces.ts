import { IconDefinition as BrandIcon } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition as SolidIcon } from '@fortawesome/free-solid-svg-icons';
import { InputType, ImagePath, Emoji } from './types';
import { IconType } from 'react-icons';

export interface SocialIcon {
  icon: BrandIcon;
  label?: string;
  href: URL;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  zip: string;
}

export interface CheckoutFormInput {
  type: InputType;
  name: string;
  placeholder: string;
}

export interface Email {
  name: string;
  email: string;
  message: string;
}

export interface MenuLink {
  text: string;
  href: `/${string}`;
}

export interface MenuLinkWithSubmenu extends MenuLink {
  submenu?: MenuLink[];
}

export interface ProcessStep {
  title: string;
  icon: IconType;
  text: string;
  link: `/${string}`;
  colorClass: string;
  tagColor: string;
}

export interface ServiceCarouselItem {
  title: string;
  lessons: string;
  badgeColor: `bg-${string}-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00`;
  image: ImagePath;
}

export interface TitleAndDesc {
  title: string;
  description: string;
}

export interface Service extends TitleAndDesc {
  color: string;
  icon: SolidIcon;
}

export interface ColorMap {
  blue: string;
  red: string;
  green: string;
}

export interface PriceMap {
  'Performance Coaching': number;
  'Executive Performance': number;
  'Group Performance': number;
}

export interface CoachingStep extends TitleAndDesc {
  image: ImagePath;
}

export interface TitleDescAndEmoji extends TitleAndDesc {
  icon: Emoji;
}

export interface CoachingService extends TitleDescAndEmoji {
  features: string[];
}

export interface ClientSuccessStory {
  avatar: string;
  name: string;
  role: string;
  story: string;
  result: string;
}

export interface ConsultingService extends TitleAndDesc {
  icon: SolidIcon;
  link: `/${string}`;
}

export interface ConsultingIndustry {
  name: string;
  icon: SolidIcon;
}

export interface GoldIcon {
  icon: BrandIcon | SolidIcon;
  label: string;
  href?: URL;
  text: string;
}

export interface Module {
  pillar: string;
  bullets: string[];
  image: ImagePath;
}

export interface ListenOn {
  href: URL;
  src: ImagePath;
  alt: string;
}

export interface PodcastQuote {
  text: string;
  author: `— ${string}`;
}
