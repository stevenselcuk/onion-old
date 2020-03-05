import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';
import device from '../../style/device';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 305}, 64%, 60%)
  );
  background: #C3CFE2;
  color: ${textsColor};
  position: relative;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;


  ${device.phone`

	`}

  ${device.tablet`

	`}

  ${device.desktop`

	`}

`;

export const Left = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Right = styled.div``;
