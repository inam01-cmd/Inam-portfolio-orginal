// Type definitions for React (Shim for CDN)
declare module 'react' {
  namespace React {
      type ReactNode = any;
      type FC<P = {}> = (props: P) => any;
      type FormEvent = any;
      type ChangeEvent<T> = any;
      type KeyboardEvent = any;
      
      // Hooks
      function useState<T>(initial: T | (() => T)): [T, (newVal: T | ((prev: T) => T)) => void];
      function useEffect(effect: () => void | (() => void), deps?: any[]): void;
      function useRef<T>(initialValue: T): { current: T };
      function useMemo<T>(factory: () => T, deps: any[] | undefined): T;
      function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
      
      // Components
      const StrictMode: any;
      const Suspense: any;
      
      // Events
      interface SyntheticEvent<T = Element, E = Event> {
          nativeEvent: E;
          currentTarget: T;
          target: T;
          preventDefault(): void;
          stopPropagation(): void;
      }

      // SVGProps for IconProps
      interface SVGProps<T> {
          className?: string;
          style?: any;
          width?: string | number;
          height?: string | number;
          viewBox?: string;
          fill?: string;
          stroke?: string;
          strokeWidth?: string | number;
          strokeLinecap?: "butt" | "round" | "square" | "inherit";
          strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
          [key: string]: any;
      }
  }

  const React: {
      useState: typeof React.useState;
      useEffect: typeof React.useEffect;
      useRef: typeof React.useRef;
      useMemo: typeof React.useMemo;
      useCallback: typeof React.useCallback;
      StrictMode: typeof React.StrictMode;
      Suspense: typeof React.Suspense;
      createElement: any;
      Fragment: any;
  };
  export default React;
  
  export const useState: typeof React.useState;
  export const useEffect: typeof React.useEffect;
  export const useRef: typeof React.useRef;
  export const useMemo: typeof React.useMemo;
  export const useCallback: typeof React.useCallback;
  export const StrictMode: typeof React.StrictMode;
  export const Suspense: typeof React.Suspense;
  export const Fragment: any;
  
  export type ReactNode = React.ReactNode;
  export type FC<P = {}> = React.FC<P>;
  export type FormEvent = React.FormEvent;
  export type ChangeEvent<T> = React.ChangeEvent<T>;
  export type KeyboardEvent = React.KeyboardEvent;
  export type SVGProps<T> = React.SVGProps<T>;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment | null): {
      render(children: any): void;
      unmount(): void;
  };
}

// Type definitions for Lucide React (Shim for CDN)
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
  // Fallback for any other icon
  export const [key: string]: any;
}

declare module '@google/genai' {
  export class GoogleGenAI {
      constructor(config: { apiKey: string });
      chats: {
          create(config: any): any;
      };
      models: {
          generateContent(config: any): Promise<any>;
      }
  }
}
