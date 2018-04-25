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

import { Modal, Card } from '../src';

const items = [
  {
    text: 'Dashboard',
    current: true
  },
  { text: 'Projects', badge: '23' },
  { text: 'Issues', badge: '99+' },
  { text: 'Reports', badge: '6' },
  { text: 'User Center' }
];

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is Modal')(() => (
        <Modal show={boolean('show', true)}>
          <Card width="300px" height="220px">
            <Card.Container>Aut asperiores eos quis consequuntur nisi quo.</Card.Container>
          </Card>
        </Modal>
      ))
    )
  );
