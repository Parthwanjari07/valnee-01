declare module '@splidejs/react-splide' {
  import { ReactNode, ComponentProps, RefObject } from 'react';

  export interface SplideOptions {
    type?: string;
    perPage?: number;
    perMove?: number;
    gap?: string | number;
    arrows?: boolean;
    pagination?: boolean;
    breakpoints?: Record<number, Record<string, unknown>>;
    [key: string]: unknown;
  }

  export interface SplideProps extends ComponentProps<'div'> {
    options?: SplideOptions;
    children?: ReactNode;
    ref?: RefObject<unknown>;
    hasTrack?: boolean;
    [key: string]: unknown;
  }

  export interface SplideSlideProps extends ComponentProps<'li'> {
    children?: ReactNode;
    [key: string]: unknown;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
}

declare module '@splidejs/react-splide/css' {
  const styles: string;
  export default styles;
}
