import { up, down, between, only } from 'styled-breakpoints';
import { rem } from 'polished';

export const breakpoints = {
  xs: rem(0),
  sm: rem(576),
  md: rem(768),
  lg: rem(992),
  xl: rem(1200),
  xxl: rem(1400),
};

const media = { up, down, between, only };

export const mq = media;

export default media;
