import LoadingSpinner from 'components/LoadingSpinner'
import React from 'react'

import * as S from './styles'

interface Props {
  text?: string
}

const LoadingText = ({ text = 'Loading...' }: Props) => {
  return (
    <S.Wrapper>
      <LoadingSpinner />
      <span>{text}</span>
    </S.Wrapper>
  )
}

export default LoadingText
