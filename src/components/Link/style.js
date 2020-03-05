import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';

export const WrapperWithLink = styled.a``;

export const Button = styled.div`
  width: ${props => (props.size === 'Big' ? '300px' : '120px')};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 16px;
  background: #222;
  border-radius: 6px;
  box-shadow: 0px 20px 40px rgba(63, 59, 86, 0.4);
  transition: all 300ms ease-in-out;
  will-change: transform;
  background: ${textsColor};
  color: ${boxsBackgroundColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 20px 40px rgba(63, 59, 86, 0.6);
  }
`;
