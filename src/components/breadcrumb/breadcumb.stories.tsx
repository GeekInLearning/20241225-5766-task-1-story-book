import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Breadcumb } from "./breadcumb";
import { BREADCUMB_VARIANT } from "./breadcumb.type";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Molecule/Breadcumb",
  component: Breadcumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: "select", options: Object.values(BREADCUMB_VARIANT) },
    children: {
      control: "text",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Breadcumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    datas: [
      {
        label: "Home",
      },
      {
        label: "Caption1",
      },
      {
        label: "Caption2",
      },
    ],
  },
};

export const Custom: Story = {
  args: {
    datas: [
      {
        label: "Home",
      },
      {
        label: "Caption1",
      },
      {
        label: "Caption2",
      },
    ],
    children: <>/</>,
  },
};