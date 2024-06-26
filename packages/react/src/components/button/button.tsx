import { ComponentProps, ElementType } from 'react'
import { styled } from '../../../styles'

export const Button = styled(
  'button',
  {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    cursor: 'pointer',
    padding: '0 $4',
    svg: {
      width: '$4',
      height: '$4',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
    transition: '0.1s ease',
    variants: {
      variant: {
        primary: {
          color: '$white',
          background: '$ignite500',

          '&:not(:disabled):hover': {
            background: '$ignite300',
          },

          '&:disabled': {
            background: '$gray200',
          },
        },
        secondary: {
          color: '$ignite300',
          border: '2px solid $ignite500',

          '&:not(:disabled):hover': {
            background: '$ignite500',
            color: '$white',
          },

          '&:disabled': {
            background: '$gray200',
            borderColor: '$gray200',
            color: '$white',
          },
        },
        tertiary: {
          color: '$gray300',

          '&:not(:disabled):hover': {
            color: '$white',
          },

          '&:disabled': {
            color: '$gray600',
          },
        },
      },
      size: {
        sm: {
          height: 38,
        },
        md: {
          height: 46,
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
  'Button',
)

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
