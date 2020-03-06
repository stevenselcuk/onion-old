import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';

export const WrapperWithLink = styled.a``;

export const Button = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: ${props => (props.size === 'Big' ? '18px' : '16px')};
  font-size: ${props => (props.size === 'Big' ? '16px' : '14px')};
  background: #222;
  border-radius: ${props => (props.size === 'Big' ? '6px' : '3px')};
  box-shadow: 0px 20px 40px rgba(63, 59, 86, 0.4);
  transition: box-shadow 300ms ease-in-out;
  will-change: box-shadow;
  background: ${textsColor};
  color: ${boxsBackgroundColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    box-shadow: 0px 20px 40px rgba(63, 59, 86, 0.6);
  }
`;
