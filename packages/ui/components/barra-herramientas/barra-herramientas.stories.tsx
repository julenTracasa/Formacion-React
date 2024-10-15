import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../base/button/button";
import { BarraHerramientas } from "./barra-herramientas";
import React from "react";

const meta: Meta = {
  title: "Componentes/Barra de herramientas",
  component: BarraHerramientas,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarraHerramientas>;

export const Predeterminado: Story = {
  args: {
    children: (
      <>
        <Button size="small">Buscar</Button>
      </>
    ),
  },
};
