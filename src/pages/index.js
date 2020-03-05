import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';
import withLayout from '../components/Layout';
import Hero from '../components/Hero';
import {Row} from '../components/Primitives';
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

const TheOnion = () => {
  return (
    <LeftPosition>
      <HugeTitle>🧅 theOnion</HugeTitle>
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
    <div>
      <Hero leftContent={<TheOnion />} rightContent={<About />} />
      <Hero leftContent={<TheOnion />} rightContent={<About />} />
    </div>
  );
};

export default withLayout(IndexPage);