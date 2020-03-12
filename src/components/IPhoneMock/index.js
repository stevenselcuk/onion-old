import React, { useEffect } from 'react';
import posed from 'react-pose';
import { Phone, AppContent, AppWrapper } from './style';

const AnimatedContainer = posed.div({
  enter: {
    rotate: '0deg',
    delay: 400,
    transition: {
      rotate: { type: 'spring', stiffness: 1000, damping: 5 },
      default: { duration: 300 },
    },
  },
  exit: {
    rotate: '-10deg',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const MockUp = ({ phoneURI }) => {
  return (
    <AnimatedContainer>
      <AppWrapper hue={149}>
        <AppContent></AppContent>
        <Phone phoneURI={phoneURI}> </Phone>
      </AppWrapper>
    </AnimatedContainer>
  );
};

MockUp.defaultProps = {
  phoneURI: './images/iphone.png',
};
export default MockUp;
