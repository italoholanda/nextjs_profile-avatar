import Modal from 'components/Modal'
import React from 'react'

import * as S from './styles'

interface Props {
  onClose: () => void
}

const EditPhotoModal = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose} title="Upload a new photo">
      <S.Wrapper>
        <label htmlFor="image-upload">Click here to upload a new photo</label>
        <input id="image-upload" type="file" accept="image/png, image/jpeg" />
      </S.Wrapper>
    </Modal>
  )
}

export default EditPhotoModal
