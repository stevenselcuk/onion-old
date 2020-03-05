import React, { useEffect } from 'react';
import styled from 'styled-components';
import { boxsBackgroundColor, textsColor } from '../../style/theme';


export const SpacerComponent = styled.div`

  height: ${props => props.size === 'Big' ? '50px' : '25px'} ;
`;

const MockUp = ({ size }) => {
  useEffect(() => {}, []);

  return (
    <SpacerComponent size={size}/>
  );
};

export default MockUp;
