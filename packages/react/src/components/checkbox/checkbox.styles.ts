import { styled, keyframes } from '../../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(
  Checkbox.Root,
  {
    all: 'unset',
    width: '$6',
    height: '$6',
    background: '$gray900',
    borderRadius: '$xs',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $gray900',
    transition: '0.1s ease',

    '&[data-state="checked"]': {
      background: '$ignite300',
    },

    '&:focus': {
      border: '2px solid $ignite300',
    },
  },
  'CheckboxContainer',
)

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0%)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0%)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(
  Checkbox.Indicator,
  {
    color: '$white',
    width: '$4',
    hieght: '$4',

    '&[data-state="checked"]': {
      animation: `${slideIn} 0.1s ease`,
    },

    '&[data-state="unchecked"]': {
      animation: `${slideOut} 0.1s ease`,
    },
  },
  'CheckboxIndicator',
)
