import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Left, Right } from './style';

const Hero = ({ leftContent, rightContent }) => {
  return (
    <Wrapper hue={150}>
      <Left>{leftContent}</Left>
      <Right>{rightContent}</Right>
    </Wrapper>
  );
};

Hero.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default Hero;
