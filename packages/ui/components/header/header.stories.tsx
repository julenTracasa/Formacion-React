import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderProps } from "./header";

const meta: Meta<HeaderProps> = {
  title: "Componentes/Header/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    centro: <div>Cabecera</div>,
  },
};
