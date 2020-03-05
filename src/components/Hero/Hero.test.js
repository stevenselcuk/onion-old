import { render, configure } from 'enzyme';
import 'jest';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Hero from './index';

configure({adapter: new Adapter()});

const LinkStub = (props) => <div {...props} />;

describe('Hero component', () => {
  it('should render nothing if only 1 page', () => {

    const wrapper = render(
      <Hero
        leftContent={<LinkStub/>}
        rightContent={<LinkStub/>}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

});
