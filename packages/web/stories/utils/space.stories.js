/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import md from './space.md';

import { utils } from '../../src';

const Container = styled.div`
  ${utils.space};
`;

storiesOf('utils | space', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(md)(
      () => (
        <Container padding="20px">
          Container with space utils
        </Container>
      )
    )
  );
