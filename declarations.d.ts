export {};

// Lucide React
declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
      size?: string | number;
      absoluteStrokeWidth?: boolean;
      className?: string;
      color?: string;
      strokeWidth?: string | number;
      [key: string]: any;
  }
  export type Icon = FC<IconProps>;

  // Common Icons
  export const Menu: Icon;
  export const X: Icon;
  export const Code2: Icon;
  export const Github: Icon;
  export const Linkedin: Icon;
  export const Mail: Icon;
  export const Download: Icon;
  export const Cloud: Icon;
  export const Settings: Icon;
  export const Box: Icon;
  export const Activity: Icon;
  export const Code: Icon;
  export const CheckCircle2: Icon;
  export const ExternalLink: Icon;
  export const Briefcase: Icon;
  export const MapPin: Icon;
  export const Phone: Icon;
  export const Send: Icon;
  export const MessageSquare: Icon;
  export const Minimize2: Icon;
  export const Bot: Icon;
  export const GraduationCap: Icon;
  export const Award: Icon;
  export const Calendar: Icon;
  export const ShieldCheck: Icon;
  export const Server: Icon;
  export const BookOpen: Icon;
  
  // Catch-all
  export const [key: string]: any;
}
