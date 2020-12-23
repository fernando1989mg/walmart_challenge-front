import React from 'react';
import {Heading} from './styled';

export default ({ type, children, ...props }) => {
  let Typography = Heading[type];
  return <Typography {...props}>{children}</Typography>;
}