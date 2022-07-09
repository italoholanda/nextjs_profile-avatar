import { useEffect, useState } from 'react'

import ReactCrop, { Crop } from 'react-image-crop'

import 'react-image-crop/dist/ReactCrop.css'

import * as S from './styles'

interface Props {
  imageToCrop: File
  onImageCropped: (base64file: string) => void
}

function ImageCropper(props: Props) {
  const { imageToCrop, onImageCropped } = props
  const [cropConfig, setCropConfig] = useState<Crop>()
  const [imageElement, setImageElement] = useState<HTMLImageElement>()

  async function cropImage(crop: Crop) {
    if (imageElement && crop.width && crop.height) {
      const croppedImage = await getCroppedImage(imageElement, crop)
      onImageCropped(croppedImage)
    }
  }

  function getCroppedImage(sourceImage: HTMLImageElement, cropConfig: Crop) {
    const canvas = document.createElement('canvas')
    const scaleX = sourceImage.naturalWidth / sourceImage.width
    const scaleY = sourceImage.naturalHeight / sourceImage.height
    canvas.width = cropConfig.width
    canvas.height = cropConfig.height
    const ctx = canvas.getContext('2d')

    ctx?.drawImage(
      sourceImage,
      cropConfig.x * scaleX,
      cropConfig.y * scaleY,
      cropConfig.width * scaleX,
      cropConfig.height * scaleY,
      0,
      0,
      cropConfig.width,
      cropConfig.height
    )

    return canvas.toDataURL('image/jpeg')
  }

  useEffect(() => {
    const imageUrl = URL.createObjectURL(imageToCrop)
    const image = document.querySelector('#uploaded-image') as HTMLImageElement
    image.src = imageUrl
    setImageElement(image)
  }, [imageToCrop])

  return (
    <S.Wrapper>
      <ReactCrop
        crop={cropConfig}
        ruleOfThirds
        onComplete={(cropConfig) => cropImage(cropConfig)}
        onChange={(cropConfig) => setCropConfig(cropConfig)}
        circularCrop
        aspect={1}
      >
        {/* eslint-disable-next-line */}
        <img id="uploaded-image" />
      </ReactCrop>
    </S.Wrapper>
  )
}

export default ImageCropper
