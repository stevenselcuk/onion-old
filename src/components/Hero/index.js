import React, { useEffect } from 'react';
import { Centered } from '../Primitives'
import {Wrapper, Left, Right} from './style'


const Hero = ({leftContent, rightContent}) => {

  return(
   <Wrapper hue={150}>
   <Left>
   {leftContent}

   </Left>

   <Right>
   {rightContent}
   </Right>

   </Wrapper>
  )
}

export default Hero
