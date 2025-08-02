declare module '@splidejs/react-splide' {
  import { ReactNode, ComponentProps, RefObject } from 'react';

  export interface SplideProps extends ComponentProps<'div'> {
    options?: {
      type?: string;
      perPage?: number;
      perMove?: number;
      gap?: string | number;
      arrows?: boolean;
      pagination?: boolean;
      breakpoints?: Record<number, any>;
      [key: string]: any;
    };
    children?: ReactNode;
    ref?: RefObject<any>;
    hasTrack?: boolean;
    [key: string]: any;
  }

  export interface SplideSlideProps extends ComponentProps<'li'> {
    children?: ReactNode;
    [key: string]: any;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
}

declare module '@splidejs/react-splide/css' {
  const styles: string;
  export default styles;
}
