import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import Checkbox from '../atoms/checkbox';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void; 
}

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta;

export const CheckboxStory: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;
CheckboxStory.args = {
  checked: true,
  onChange: () => { console.log('Checkbox został naciśnięty!'); }
};
