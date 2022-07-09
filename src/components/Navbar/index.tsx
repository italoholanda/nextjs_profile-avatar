import Image from 'next/image'

import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <Image src="/svg/nav.svg" height={32} width={48} />
  </S.Wrapper>
)

export default Navbar
