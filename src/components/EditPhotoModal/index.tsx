import Modal from 'components/Modal'
import React from 'react'

interface Props {
  onClose: () => void
}

const EditPhotoModal = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose} title="Upload a new photo">
      <div>Click here to upload a new photo</div>
    </Modal>
  )
}

export default EditPhotoModal
