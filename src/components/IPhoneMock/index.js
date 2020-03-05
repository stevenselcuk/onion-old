import React, { useEffect } from 'react';
import { Phone, AppContent, AppWrapper } from './style';

const MockUp = props => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <>
      <AppWrapper hue={149}>
        <AppContent>asd</AppContent>
        <Phone phoneURI={'./images/iphone.png'}> </Phone>
      </AppWrapper>
    </>
  );
};

export default MockUp;
