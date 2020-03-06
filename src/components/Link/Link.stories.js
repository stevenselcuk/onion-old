import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import Link from './index';
import Phone from '../IPhoneMock';
import { resolve } from 'path';

storiesOf('Link Button 🔥', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Link go={'https://github.com/stevenselcuk/onion'}>🔥 Download </Link>
    );
  });
