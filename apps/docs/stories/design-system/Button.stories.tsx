import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, DesignSystemProvider } from "@phoenix/design-system";

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
      table: {
        disable: true
      }
    },
    iconRight: {
      table: {
        disable: true
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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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
