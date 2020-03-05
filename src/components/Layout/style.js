import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';
import { Provider } from '../../store/createContext';

export const Wrapper = styled.div`
  background: ${boxsBackgroundColor};
  color: ${textsColor};
`;
