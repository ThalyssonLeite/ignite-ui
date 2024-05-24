import { TextInput, TextInputProps } from '@gpssat/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
