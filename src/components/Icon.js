import React from 'react';
import { shouldUpdate } from 'recompose';

const withHOC = shouldUpdate((props, nextProps) => props !== nextProps);

export const Icon = withHOC(({ name, platform = 'ios', size = 32, color }) => (
  <i
    className={`icon ion-${platform}-${name}`}
    style={{ fontSize: size, cursor: 'pointer', color }}
  />
));
