import { IconDefinition as BrandIcon } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition as CoreIcon } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition as SoldIcon } from "@fortawesome/free-solid-svg-icons";

export interface SocialIcon {
    icon: BrandIcon | CoreIcon | SoldIcon;
    link: URL;
};