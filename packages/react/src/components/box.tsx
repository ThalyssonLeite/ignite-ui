import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const Box = styled(
  'div',
  {
    padding: '$16',
    borderRadius: '$md',
    background: '$gray800',
    border: '1px solid $gray600',
    color: '$white',
  },
  'Box',
)

export type BoxProps = ComponentProps<typeof Box>
