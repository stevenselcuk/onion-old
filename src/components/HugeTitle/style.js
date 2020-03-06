import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';
import device from '../../style/device';

export const Title = styled.div`
font-size: 9vw;
  position: relative;
  color: ${textsColor};
  text-shadow: 0px 2px 8px rgba(63, 59, 86, 0.3);

  line-height: calc(1.3em + (1.5 - 1.3) * ((100vw - 21em)/(35 - 21)));


  > div {
    min-height: 32px;
    min-width: 32px;
    max-height: calc(3em + (1.5 - 1.3) * ((100vw - 21em)/(35 - 21)));
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  > div img {
  max-height: calc(3em + (1.5 - 1.3) * ((100vw - 21em)/(35 - 21)));
  min-height: 32px;
  cursor: grab;
  }
`;
