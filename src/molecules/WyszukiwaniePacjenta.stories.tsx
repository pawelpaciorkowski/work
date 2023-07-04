import type { Meta, StoryObj } from "@storybook/react";
import WyszukiwaniePacjenta, {
  WyszukiwaniePacjentaProps,
} from "./WyszukiwaniePacjenta";

const meta: Meta<typeof WyszukiwaniePacjenta> = {
  title: "Molecules/WyszukiwaniePacjenta",
  component: WyszukiwaniePacjenta,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BrakWyboru: Story = {
  args: {
    onPatientSearch: async (searchQuery: string) => {
      // Placeholder - tutaj możesz wywołać rzeczywiste API w celu wyszukania pacjentów na podstawie zapytania
      // W tym przypadku zawsze zwracamy pustą tablicę, symulując brak wyników
      return [];
    },
  },
};

export const WyborPacjentów: Story = {
  args: {
    onPatientSearch: async (searchQuery: string) => {
      const data = [
        { id: 1, name: "Jan", surename: "Kowalski", pesel: "12345678901" },
        { id: 2, name: "Anna", surename: "Nowak", pesel: "90062604222" },
        { id: 3, name: "Piotr", surename: "Kowalski", pesel: "12345678771" },
      ];
      return data.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
};

