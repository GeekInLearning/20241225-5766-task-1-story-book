import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Toast } from "./toast";
import { TOAST_SIZE, TOAST_TYPE, TOAST_VARIANT } from "./toast.type";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Molecule/Toast",
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: "select", options: Object.values(TOAST_SIZE) },
    variant: { control: "select", options: Object.values(TOAST_VARIANT) },
    type: { control: "select", options: Object.values(TOAST_TYPE) },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InformationDefault: Story = {
  args: {
    title: "Informasi Default",
    type: TOAST_TYPE.INFORMATION,
    titleText: "Title Message",
    children: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nam
        quo dicta sit
      </>
    ),
  },
};

export const NotificationDefault: Story = {
  args: {
    title: "Informasi Default",
    type: TOAST_TYPE.NOTIFICATION,
    titleText: "Title Message",
    children: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nam
        quo dicta sit
      </>
    ),
  },
};
