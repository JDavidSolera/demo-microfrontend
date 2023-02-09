import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Batery, Cloud, Reload, ChevronRight, ChevronLeft, DesignSystemProvider } from "@phoenix/design-system";

const iconsMap = {
  Batery,
  Cloud,
  Reload,
  ChevronRight,
  ChevronLeft,
}

export default {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    as: {
      table: {
        disable: true
      }
    },
    iconLeft: {
      control: {
        type: 'select',
        options: [undefined, ...Object.keys(iconsMap)]
      }
    },
    iconRight: {
      control: {
        type: 'select',
        options: [undefined, ...Object.keys(iconsMap)]
      }
    }
  },
  decorators: [
    (Story) => (
      <DesignSystemProvider>
        {Story()}
      </DesignSystemProvider>
    )
  ]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ iconRight, iconLeft, ...args }) => {
  const Right = iconsMap[iconRight]
  const Left = iconsMap[iconLeft]

  return <Button iconLeft={iconLeft && <Left />} iconRight={iconRight && <Right />} {...args} />
};

export const BasicButton = Template.bind({});

BasicButton.args = {
  label: "Button",
  $variant: "primary",
};

export const IconButton = Template.bind({})

IconButton.args = {
  label: "Button",
}

export const LoadingButton = Template.bind({})

LoadingButton.args = {
  label: "Fetch data",
}
