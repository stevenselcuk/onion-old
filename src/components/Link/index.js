import React, { useEffect } from 'react';
import { Button, WrapperWithLink } from './style';

const MockUp = ({ go, children, size }) => {
  useEffect(() => {}, []);

  return (
    <WrapperWithLink href={go}>
      <Button size={size}>{children}</Button>
    </WrapperWithLink>
  );
};

export default MockUp;
