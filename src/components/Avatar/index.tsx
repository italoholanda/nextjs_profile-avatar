import useAuth from 'hooks/useAuth'
import Image from 'next/image'
import * as S from './styles'

interface Props {
  pxSize?: number
}

const Avatar = ({ pxSize = 32 }: Props) => {
  const { avatar } = useAuth()

  return (
    <S.Wrapper>
      <Image
        data-testid="avatar"
        src={avatar || '/svg/avatar.svg'}
        width={pxSize}
        height={pxSize}
        alt="avatar"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '/svg/avatar.svg'
        }}
      />
    </S.Wrapper>
  )
}

export default Avatar
