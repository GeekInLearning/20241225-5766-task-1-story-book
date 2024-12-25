import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Modal } from "./modal";
import { MODAL_SIZE, MODAL_TYPE } from "./modal.type";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Molecule/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {
    size: MODAL_SIZE.MEDIUM,
    type: MODAL_TYPE.SIMPLE,
    children: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        voluptatibus maxime sapiente, temporibus porro iste amet velit modi cum
        sed tempore id libero dolore accusantium. Asperiores recusandae qui
        veniam earum?
      </>
    ),
  },
};

export const Rounded: Story = {
  args: {
    size: MODAL_SIZE.MEDIUM,
    type: MODAL_TYPE.ROUNDED,
    children: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        voluptatibus maxime sapiente, temporibus porro iste amet velit modi cum
        sed tempore id libero dolore accusantium. Asperiores recusandae qui
        veniam earum?
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: MODAL_SIZE.SMALL,
    type: MODAL_TYPE.SIMPLE,
    children: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        voluptatibus maxime sapiente, temporibus porro iste amet velit modi cum
        sed tempore id libero dolore accusantium. Asperiores recusandae qui
        veniam earum?
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: MODAL_SIZE.MEDIUM,
    type: MODAL_TYPE.SIMPLE,
    children: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        voluptatibus maxime sapiente, temporibus porro iste amet velit modi cum
        sed tempore id libero dolore accusantium. Asperiores recusandae qui
        veniam earum?
      </>
    ),
  },
};

export const Lrage: Story = {
  args: {
    size: MODAL_SIZE.LARGE,
    type: MODAL_TYPE.SIMPLE,
    children: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        voluptatibus maxime sapiente, temporibus porro iste amet velit modi cum
        sed tempore id libero dolore accusantium. Asperiores recusandae qui
        veniam earum?
      </>
    ),
  },
};
