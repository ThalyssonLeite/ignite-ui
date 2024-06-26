import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const TextArea = styled(
  'textarea',
  {
    width: '100%',
    background: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: '$regular',
    resize: 'vertical',
    minHeight: 80,
    cursor: 'text',
    outline: 0,

    '&:focus': {
      borderColor: '$ignite300',
    },

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    '&:placeholder': {
      color: '$ignite400',
    },
  },
  'TextArea',
)

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
