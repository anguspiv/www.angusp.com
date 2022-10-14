import { rem } from 'polished';

export const spacing = (...units) =>
  units.reduce((val, unit) => `${val} ${unit === 'auto' ? unit : rem(8 * unit)}`.trim(), '');

export default spacing;
