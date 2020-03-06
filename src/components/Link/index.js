import React from 'react';
import posed from 'react-pose';
import PropTypes from 'prop-types';
import { Button, WrapperWithLink } from './style';


const Box = posed(WrapperWithLink)({
  hoverable: true,
  pressable: true,
  transition: {
    default: { type: 'spring', stiffness: 2000, damping: 15 }
  },
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
  press: {
    scale: 0.9,
  }
});

const Link = ({ go, children, size }) => {
  return (
    <Box href={go}>
      <Button size={size}>{children}</Button>
    </Box>
  );
};

Link.propTypes = {
  go: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string
};

export default Link;
