import React from 'react';
import { Story, Meta } from '@storybook/react'; 
import SearchComboBox, { SearchComboBoxProps } from './SearchComboBox';

export default {
  title: 'Atoms/SearchComboBox',
  component: SearchComboBox,
  argTypes: {
    onItemChange: { action: 'changed' },
  },
} as Meta;

const Template: Story<SearchComboBoxProps> = (args) => <SearchComboBox {...args} />;

export const SearchList = Template.bind({});
SearchList.args = {
  items: [],
  selectedItem: '',
  onItemChange: (selectedItem: string) => console.log('Wybrano:', selectedItem),
};

