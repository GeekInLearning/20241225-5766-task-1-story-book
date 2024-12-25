import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import { fn } from "@storybook/test";

const meta = {
  title: "Molecule/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        option: ["light", "dark"],
      },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: "light",
    title: "Light Theme",
    label:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, in voluptatibus consequatur excepturi ea ex quidem quod nulla, ut debitis cupiditate perferendis ullam. Rem est distinctio amet corporis at! Iusto.",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    title: "Light Theme",
    label:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, in voluptatibus consequatur excepturi ea ex quidem quod nulla, ut debitis cupiditate perferendis ullam. Rem est distinctio amet corporis at! Iusto.",
  },
};
