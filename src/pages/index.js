import React, { useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import withLayout from '../components/Layout';
import Hero from '../components/Hero';
import { Row } from '../components/Primitives';
import Phone from '../components/IPhoneMock';
import HugeTitle from '../components/HugeTitle';
import CoolLink from '../components/Link';
import Spacer from '../components/Spacer';
import Divider from '../components/Divider';
import NetlifyIcon from '../../static/images/netlify.svg';
import NowIcon from '../../static/images/now.svg';

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
  font-size: 16px;
  margin-top: 40px;
`;

const AnimatedOnion = posed.img({
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
  },
});

const PoseWrapper = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    transition: {
      default: { duration: 300 },
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 150 },
  },
});

const TheOnion = () => {
  return (
    <LeftPosition>
      <HugeTitle>
        <AnimatedOnion src={'./images/icon.png'} /> theOnion
      </HugeTitle>
      <FeaturesWrapper>
        <div>Gatsby Starter for your awesome product 🙌</div>
      </FeaturesWrapper>

      <Spacer size={'Big'} />
      <Divider />
      <Spacer size={'Big'} />

      <Row>
        <CoolLink
          go={
            'https://zeit.co/import/project?template=https://github.com/stevenselcuk/onion'
          }
        >
          <NowIcon /> Deploy to Now.sh
        </CoolLink>
        <CoolLink
          go={
            'https://app.netlify.com/start/deploy?repository=https://github.com/stevenselcuk/onion'
          }
        >
          <NetlifyIcon /> Deploy to Netlify
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
