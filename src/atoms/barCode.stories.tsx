import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import BarCode, { BarCodeProps } from './barCode';

export default {
  title: 'Atoms/BarCode',
  component: BarCode,
  tags: ['autodocs'],
} as Meta;


const Template: StoryFn<BarCodeProps> = (args: BarCodeProps) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    console.log('Wprowadzono wartość:', newValue);
  };

  return <BarCode value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
};
