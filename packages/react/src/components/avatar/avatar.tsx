import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './avatar.styles'
import { User } from 'phosphor-react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
