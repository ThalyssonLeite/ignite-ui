import { TextArea, TextAreaProps } from '@gpssat/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Write down your description',
  },
}
