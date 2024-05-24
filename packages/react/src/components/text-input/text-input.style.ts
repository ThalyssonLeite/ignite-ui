import { styled } from '../../../styles'

export const TextInputContainer = styled(
  'div',
  {
    background: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'baseline',
    cursor: 'text',

    '&:has(input:focus)': {
      borderColor: '$ignite300',
    },

    '&:has(input:disabled)': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  'TextInputContainer',
)

export const TextInputPrefix = styled(
  'span',
  {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: '$regular',
  },
  'TextInputPrefix',
)

export const Input = styled(
  'input',
  {
    fontFamily: '$default',
    fontSize: '$sm',
    cursor: 'inherit',
    color: '$white',
    background: 'transparent',
    border: 'none',
    width: '100%',
    outline: 'none',

    '&:placeholder': {
      color: '$gray400',
    },
  },
  'Input',
)
