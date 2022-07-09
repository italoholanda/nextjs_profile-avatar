import { FC, InputHTMLAttributes } from 'react'

import * as S from './styles'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: FC<Props> = (props) => {
  return (
    <S.Wrapper>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props} />
    </S.Wrapper>
  )
}

export default Input
