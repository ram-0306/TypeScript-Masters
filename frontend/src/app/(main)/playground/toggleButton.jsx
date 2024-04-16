import { SegmentedControl } from '@mantine/core';
import classes from './toggleButton.module.css';
import React from 'react';

const toggleButton=()=> {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['All', 'AI/ML', 'C++', 'JavaScript', 'TypeScript']}
      classNames={classes}
    />
  );
}
export default toggleButton;