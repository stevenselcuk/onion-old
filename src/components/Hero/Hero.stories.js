import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import Hero from './index';
import Phone from '../IPhoneMock';
import { resolve } from 'path';

storiesOf('Hero 🔥', module)
  .addDecorator(withKnobs)
  .addParameters({
    fileName: resolve(__dirname, 'README.md'),
  })
  .add('default', () => {
    return (
      <Hero
        leftContent={<div>Your Awesome details here...</div>}
        rightContent={<Phone phoneURI={'./images/iphone.png'} />}
      />
    );
  });
