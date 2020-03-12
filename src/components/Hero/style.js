import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';
import device from '../../style/device';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /**
  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 305}, 64%, 60%)
  );
  */
  color: ${textsColor};
  position: relative;
  display:flex;
  flex-direction: row;
  flex-wrap:   wrap-reverse;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  > div {
    padding-left: 10px;
  padding-right: 10px;
  }


`;

export const Left = styled.div``;

export const Right = styled.div``;
