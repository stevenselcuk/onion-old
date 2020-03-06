import React, { useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';
import withLayout from '../components/Layout';
import Hero from '../components/Hero';
import { Row } from '../components/Primitives';
import Phone from '../components/IPhoneMock';
import HugeTitle from '../components/HugeTitle';
import CoolLink from '../components/Link';
import Spacer from '../components/Spacer';
import Divider from '../components/Divider';

export const LeftPosition = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FeaturesWrapper = styled.div`
  font-size: 14px;
`;


const AnimatedOnion = posed.div({
  hoverable: true,
  draggable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
  drag: { scale: 0.9 },
  press: { scale: 0.9 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: 'spring', stiffness: 1000, damping: 5 },
  }
});



const PoseWrapper = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    transition: {
      default: { duration: 300 }
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 150 }
  }
});

const TheOnion = () => {
  return (
    <LeftPosition>
      <HugeTitle><AnimatedOnion><img src={'./images/icon.png'}/></AnimatedOnion> theOnion</HugeTitle>
      <FeaturesWrapper>
        <div>😢makes you cry.</div>
        <div>👍🏻no PHP. Only includes Javascript. FAA approved.</div>
        <div>🔪minced using option.</div>
        <div>🦠fights against Corona Virus.</div>
        <div>🧠thinks fast.</div>
        <div>👃smells like onion.</div>
        <div>🔌batteries included.</div>
      </FeaturesWrapper>

      <Spacer size={'Big'} />
      <Divider />
      <Spacer size={'Big'} />

      <Row>
        <CoolLink size={'Big'} go={'https://google.com'}>
          🎉 Download
        </CoolLink>
        <CoolLink go={'https://github.com/stevenselcuk'}>
          <FiGithub /> Github
        </CoolLink>
      </Row>
    </LeftPosition>
  );
};
const About = () => <Phone />;

const IndexPage = props => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <PoseWrapper>

<Hero leftContent={<TheOnion />} rightContent={<About />} />
    </PoseWrapper>



  );
};

export default withLayout(IndexPage);
