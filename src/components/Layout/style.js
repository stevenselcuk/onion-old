import styled from 'styled-components'
import { boxsBackgroundColor, textsColor } from '../../style/theme';
import {Provider} from '../../store/createContext'

export const Wrapper  = styled(Provider)`
  background: #fc0;
  color: ${textsColor};
  padding: 200px;

`
