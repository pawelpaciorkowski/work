import type { Meta, StoryObj } from '@storybook/react';
import {DaneKliniczneView} from "./daneKliniczne";

const meta: Meta<typeof DaneKliniczneView> = {
    title: 'Molecules/DaneKliniczne',
    component: DaneKliniczneView,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Puste: Story = {
    args: {
        teksty: ['Brak istotnych danych klinicznych', 'Kobieta w ciąży', 'Pacjent podczas terapii hormonalnych', 'Pacjent przyjmujący leki przeciwzakrzepowe', 'Pacjent przyjmujący leki sterydowe', 'Pacjent przyjmujący leki immunosupresyjne', 'Pacjent onkologiczny', 'Pacjent dializowany'],
        wybraneTeksty: [],
        onWybraneTekstyChange: (teksty: string[]) => console.log(teksty.join(', ')),
    },
};


//gdy wybierzesz tekst, jego zawartość zostanie zalogowana w konsoli przeglądarki 
