import { IconDefinition as BrandIcon } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition as CoreIcon } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition as SoldIcon } from "@fortawesome/free-solid-svg-icons";
import { InputType } from "./types";

export interface SocialIcon {
    icon: BrandIcon | CoreIcon | SoldIcon;
    link: URL;
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