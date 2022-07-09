import Image from 'next/image'
import * as S from './styles'

interface Props {
  onClose: () => void
  title: string
  children: JSX.Element | Element
}

function handleClickOutside(
  event: React.MouseEvent,
  backgrondId: string,
  onClose: () => void
) {
  const outsideElement = document.getElementById(backgrondId) as HTMLElement
  if (event.target === outsideElement) onClose()
}

const Modal = ({ title, children, onClose }: Props) => (
  <S.Wrapper
    onClick={(e) => handleClickOutside(e, 'modal-bg', onClose)}
    data-testid="modal-bg"
    id="modal-bg"
  >
    <S.Modal>
      <S.Header>
        <S.Title data-testid="modal-title">{title}</S.Title>
        <S.Close data-testid="close-button" onClick={onClose}>
          <Image
            src={'/svg/close.svg'}
            alt="Clique para fechar"
            width={16}
            height={16}
          />
        </S.Close>
      </S.Header>
      <div>{children}</div>
    </S.Modal>
  </S.Wrapper>
)

export default Modal
