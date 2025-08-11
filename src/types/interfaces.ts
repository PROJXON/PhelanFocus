import { IconDefinition as BrandIcon } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition as SolidIcon } from '@fortawesome/free-solid-svg-icons';
import { InputType, ImagePath } from './types';
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

export interface Service {
  color: string;
  icon: SolidIcon;
  title: string;
  description: string;
}

export interface ColorMap {
  blue: string;
  red: string;
  green: string;
}
