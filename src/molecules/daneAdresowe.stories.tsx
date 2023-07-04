import React from 'react';
import { Story, Meta } from '@storybook/react';
import DaneAdresowe, { DaneAdresoweProps } from './daneAdresowe';

export default {
  title: 'Molecules/DaneAdresowe',
  component: DaneAdresowe,
  argTypes: {
    onAddressSearch: { control: { disable: true } }, // Wyłącza kontrolkę do edycji zaślepki funkcji onAddressSearch
  },
} as Meta;

// Zaślepka funkcji onAddressSearch, która zwraca przykładowy niestandardowy adres
const mockAddressSearch = async (searchQuery: string): Promise<string> => {
  // Tutaj możesz zaimplementować logikę, która na podstawie searchQuery zwraca niestandardowy adres
  // W tym przykładzie zwracamy po prostu przykładowy adres "Niestandardowy adres"
  return 'Niestandardowy adres';
};

const Template: Story<DaneAdresoweProps> = (args) => <DaneAdresowe {...args} />;

export const Default = Template.bind({});
Default.args = {
  onAddressSearch: mockAddressSearch,
};
