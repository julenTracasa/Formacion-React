import type { Meta, StoryObj } from "@storybook/react";
import { PropsWithChildren } from "react";
import { Label } from "./label";

const meta: Meta<PropsWithChildren> = {
  title: "Componentes/Base/Label",
  component: Label,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Texto de ejemplo",
  },
};
