import type { Meta, StoryObj } from '@storybook/react';
import { WyborZleceniodawcyView}  from './wyborZleceniodawcy';

const meta: Meta<typeof WyborZleceniodawcyView> = {
  title: 'Molecules/WyborZleceniodawcy',
  component: WyborZleceniodawcyView,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BrakWyboru: Story = {
  args: {
    jestZlecenieGotowkowe: false,
    tylkoJedenZleceniodawca: true,
    wybranyZleceniodawca: '',
    zleceniodawcy: [
      {
        symbol: 'TEST',
        nazwa: 'Zleceniodawca testowy',
        jestZlecenieGotowkowe: false,
        hasKartaKlienta: false,
      }
    ],
  },
};

export const WyborZGotowka: Story = {
  args: {
    jestZlecenieGotowkowe: true,
    tylkoJedenZleceniodawca: true,
    wybranyZleceniodawca: '',
    zleceniodawcy: [
      {
        symbol: 'TEST',
        nazwa: 'Zleceniodawca testowy 1',
        hasKartaKlienta: false,
        jestZlecenieGotowkowe: true,
      },
      {
        symbol: 'TEST2',
        nazwa: 'Zleceniodawca testowy 2',
        hasKartaKlienta: false,
        jestZlecenieGotowkowe: true,
      },
    ],
  },
};

export const WyborZKartamiKlientow: Story = {
  args: {
    jestZlecenieGotowkowe: true,
    tylkoJedenZleceniodawca: true,
    onKartaKlientaShow: (symbol: string) => {
      return alert('Karta klienta ' + symbol);
    },
    wybranyZleceniodawca: '',
    zleceniodawcy: [
      {
        symbol: 'TEST',
        nazwa: 'Zleceniodawca testowy 1',
        hasKartaKlienta: true,
        jestZlecenieGotowkowe: true,
        uwagi: 'Uwaga! Zleceniodawca przysyła nerwowych pacjentów.',
      },
      {
        symbol: 'TEST2',
        nazwa: 'Zleceniodawca testowy 2',
        jestZlecenieGotowkowe : false,
        hasKartaKlienta: true,
      },
      {
        symbol: 'TEST3',
        nazwa: 'Zleceniodawca testowy 3, Warszawa, Polska, 12345',
        hasKartaKlienta: true,
        jestZlecenieGotowkowe: false,
        uwagi: 'Uwaga! Zleceniodawca przysyła miłych pacjentów.',
      },
    ],
  },
};
