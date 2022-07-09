import React from 'react'

import * as S from './styles'

interface Props {
  children: string | JSX.Element[] | JSX.Element
  disabled?: boolean
  onClick?: () => void
}

const Button = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Button
