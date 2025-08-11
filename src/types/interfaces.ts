import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { InputType } from "./types";

export interface SocialIcon {
  icon: IconDefinition;
  label?: string;
  href: URL;
};

export interface CheckoutFormData {
  name: string;
  email: string;
  zip: string;
};

export interface CheckoutFormInput {
  type: InputType;
  name: string;
  placeholder: string;
};

export interface Email {
  name: string;
  email: string;
  message: string;
};

export interface MenuLink {
  text: string;
  href: `/${string}`;
};

export interface MenuLinkWithSubmenu extends MenuLink {
  submenu?: MenuLink[];
};