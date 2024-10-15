import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import type { ButtonProps } from "./button";

const meta: Meta<ButtonProps> = {
  title: "Componentes/Base/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Botón por defecto",
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Botón primario",
    disabled: false,
  },
};
