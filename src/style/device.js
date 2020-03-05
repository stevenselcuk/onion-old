import { css } from 'styled-components';
export const breakpoints = {
  small: '480px',
  phone: '768px',
  tablet: '992px',
  laptop: '1200px',
  desktop: '1400px',
};

const device = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default device;
