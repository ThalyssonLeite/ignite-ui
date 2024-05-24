import { ComponentProps } from 'react'
import { TextInputContainer, TextInputPrefix, Input } from './text-input.style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  disabled: boolean
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
