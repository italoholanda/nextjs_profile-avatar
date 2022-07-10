import Modal from 'components/Modal'
import Button from 'components/Button'
import ImageCropper from 'components/ImageCropper'

import React, { useState } from 'react'

import imageCompressor from 'util/imageCompressor'

import * as S from './styles'
import LoadingText from 'components/LoadingText'
import useAuth from 'hooks/useAuth'

interface Props {
  onClose: () => void
}

const EditPhotoModal = ({ onClose }: Props) => {
  const [uploadedPhoto, setUploadedPhoto] = useState<File>()
  const [croppedImage, setCroppedImage] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)

  const { setAvatar } = useAuth()

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    try {
      const image = event.target.files[0]
      setIsLoading(true)
      const compressedImage = await imageCompressor(image)
      setUploadedPhoto(compressedImage)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
      alert('Error while processing image')
      onClose()
    }
  }

  async function handleCrop() {
    try {
      setIsLoading(true)
      setIsLoading(false)
      setAvatar(croppedImage)
      alert('Imagem atualizada')
      onClose()
    } catch (err) {
      console.error(err)
      alert('Erro ao atualizar imagem no servidor')
      setIsLoading(false)
      onClose()
    }
  }

  if (isLoading)
    return (
      <Modal onClose={onClose} title="Upload a new photo">
        <S.Loading>
          <LoadingText />
        </S.Loading>
      </Modal>
    )

  if (uploadedPhoto)
    return (
      <Modal onClose={onClose} title="Upload a new photo">
        <S.Wrapper>
          <ImageCropper
            imageToCrop={uploadedPhoto}
            onImageCropped={(file: string) => setCroppedImage(file)}
          />
          <div>
            <S.SelectAnotherImg onClick={() => setUploadedPhoto(undefined)}>
              select another image
            </S.SelectAnotherImg>
            <Button onClick={handleCrop}>crop</Button>
          </div>
        </S.Wrapper>
      </Modal>
    )

  return (
    <Modal onClose={onClose} title="Upload a new photo">
      <S.Wrapper>
        <label htmlFor="image-upload">Click here to upload a new photo</label>
        <input
          type="file"
          id="image-upload"
          onChange={handleUpload}
          accept="image/png, image/jpeg"
        />
        <Button disabled>crop</Button>
      </S.Wrapper>
    </Modal>
  )
}

export default EditPhotoModal
