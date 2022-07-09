import Avatar from 'components/Avatar'
import Navbar from 'components/Navbar'

import Image from 'next/image'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Container>
      <div>
        <Navbar />
      </div>
      <div>
        <Image src="/svg/logo.svg" width="104" height="30" />
      </div>
      <div>
        <Avatar />
      </div>
    </S.Container>
  </S.Wrapper>
)

export default Header
