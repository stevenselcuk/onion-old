import React, { useEffect } from 'react';
import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';


export const DividerComponent = styled.div`

  border-top: 1px solid rgba(0,0,0,0.1);
`;

const MockUp = props => {
  useEffect(() => {}, []);

  return (
    <DividerComponent/>
  );
};

export default MockUp;
