import React, { useEffect } from 'react';
import { Phone, AppContent, AppWrapper } from './style';

const MockUp = ({ phoneURI }) => {
  return (
    <AppWrapper hue={149}>
      <AppContent>asd</AppContent>
      <Phone phoneURI={phoneURI}> </Phone>
    </AppWrapper>
  );
};

MockUp.defaultProps = {
  phoneURI: './images/iphone.png',
};
export default MockUp;
