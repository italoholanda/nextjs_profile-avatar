import Image from 'next/image'
import * as S from './styles'

const Avatar = () => (
  <S.Wrapper>
    <Image
      data-testid="avatar"
      src="/svg/avatar.svg"
      width={32}
      height={32}
      alt="avatar"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = '/svg/avatar.svg'
      }}
    />
  </S.Wrapper>
)

export default Avatar
