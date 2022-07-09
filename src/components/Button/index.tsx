import React from 'react'

import * as S from './styles'

interface Props {
  children: string | JSX.Element[] | JSX.Element
}

const Button = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Button
