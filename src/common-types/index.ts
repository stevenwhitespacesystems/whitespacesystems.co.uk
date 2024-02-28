import { ClassValue } from 'clsx';

export interface ImageProps {
  /** Specifies the path to the image */
  src: string;
  /** Specifies an alternate text for an image */
  alt: string;
  /** Specifies the width of an image */
  width?: number;
  /** Specifies the height of an image */
  height?: number;
}

export interface LinkProps {
  /** Link title */
  label: string;
  /** The path or URL to navigate to. */
  href: string;
  /** This control specifies where to open the linked document */
  openNewTab?: boolean;
}

export interface PersonProps {
  image: ImageProps;
  name: string;
  about: string;
}

export const blurDataUrl: string =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYEBQf/xAAgEAABBAICAwEAAAAAAAAAAAABAAIDBBEhEjEFBhMi/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMF/8QAHBEAAgICAwAAAAAAAAAAAAAAAQIAIQMEBRFR/9oADAMBAAIRAxEAPwBqrV3PcNFL3s1Blny9eX7uYa7mtLAN95yFp9StCHajCp/YIImeUi4xtHLGdd7V9wkoOvZncagXIS10ZENFzsEA7GUJybBHxb+B0EJIeBOG5//Z';

export interface SocialItemProps {
  icon: React.ReactNode;
  href: string;
}

export interface SectionProps {
  className?: ClassValue;
}
