import * as S from './styles'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  title: string
  children: Element | JSX.Element | JSX.Element[]
  visible?: boolean
}

const FormBox = ({ title, children, visible = true }: Props) => {
  const [isVisible, setIsVisible] = useState(visible)

  function handleClick() {
    setIsVisible(!isVisible)
  }

  return (
    <S.Wrapper>
      <S.Header isVisible={isVisible}>
        <strong>{title}</strong>
        <div data-testid="arrow-button" onClick={handleClick}>
          <Image
            src="/svg/drop-arrow.svg"
            alt="arrow indicator - click here to close or open the form"
            height="16"
            width="16"
          />
        </div>
      </S.Header>

      <S.Content isVisible={isVisible}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default FormBox
