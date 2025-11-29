
// This file provides type definitions for modules that are loaded via CDN (importmap)
// or are otherwise missing from the local node_modules.

declare module 'react' {
  const React: any;
  export default React;
  
  // Generic signatures to allow usage of useState<T>(...) and useRef<T>(...)
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useState<T = undefined>(): [T | undefined, (newState: T | undefined | ((prevState: T | undefined) => T | undefined)) => void];

  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useRef<T = undefined>(): { current: T | undefined };

  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;

  export const useContext: any;
  export const useReducer: any;
  export const useCallback: any;
  export const useMemo: any;
  export const Suspense: any;
  export const StrictMode: any;
  export type FC<P = {}> = (props: P) => any;
  export type ReactNode = any;
  export type FormEvent = any;
  export type ChangeEvent<T = any> = any;
  export type KeyboardEvent = any;
}

declare module 'react-dom/client' {
  export const createRoot: any;
}

declare module 'lucide-react' {
  export const Menu: any;
  export const X: any;
  export const Code2: any;
  export const Github: any;
  export const Linkedin: any;
  export const Mail: any;
  export const Download: any;
  export const Cloud: any;
  export const Settings: any;
  export const Box: any;
  export const Activity: any;
  export const Code: any;
  export const CheckCircle2: any;
  export const ExternalLink: any;
  export const Briefcase: any;
  export const MapPin: any;
  export const Phone: any;
  export const Send: any;
  export const MessageSquare: any;
  export const Minimize2: any;
  export const Bot: any;
  export const GraduationCap: any;
  export const Award: any;
  export const Calendar: any;
  export const ShieldCheck: any;
  export const Server: any;
  export const BookOpen: any;
}
