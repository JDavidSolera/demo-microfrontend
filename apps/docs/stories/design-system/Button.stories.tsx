import React from 'react'
import { Button, DesignSystemProvider, ButtonProps } from '@phoenix/design-system'
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { iconControl, iconsMap } from '../utils/icons'

const meta: Meta<ButtonProps> = {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'Button',
    },
    as: {
      control: {
        type: 'select',
        options: [undefined, 'button', 'a']
      }
    },
    href: {
      defaultValue: 'http://example.com',
      if: { arg: 'as', eq: 'a' }
    },
    iconLeft: {
      control: iconControl
    },
    iconRight: {
      control: iconControl
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean',
      }
    },
  },
}

const ButtonStorybook: ComponentStory<typeof Button> = ({iconRight, iconLeft, ...props}) => {
  const Right = iconRight && iconsMap[String(iconRight)]
  const Left = iconLeft && iconsMap[String(iconLeft)]

  return (
  <Button 
    iconLeft={iconLeft && <Left />} 
    iconRight={iconRight && <Right />}
    onClick={action('Clicked')}
    {...props}
  />
  )
}

export const ButtonBase = ButtonStorybook.bind({})

ButtonBase.args = {
};

export default meta
