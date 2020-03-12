import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';
import device from '../../style/device';

export const Wrapper = styled.div`
  margin: 0 auto;

  @media only screen and (max-width: 420px) {
    max-width: 98vw;
  }
`;
