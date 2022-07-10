import Header from 'components/Header'

import * as S from './index.styles'

import { ContainerMedium } from 'styles/container'
import { useState } from 'react'

import EditPhotoModal from 'components/EditPhotoModal'
import FormBox from 'components/FormBox'
import Button from 'components/Button'
import Input from 'components/Input'

export default function Home() {
  const [photoModal, setPhotoModal] = useState(false)
  const onCloseModal = () => setPhotoModal(false)
  const onOpenModal = () => setPhotoModal(true)

  return (
    <>
      <Header />
      <ContainerMedium>
        <h1>PROFILE</h1>

        <S.SmallContainer>
          <S.Avatar>
            <S.PhotoContainer onClick={onOpenModal}>
              <S.Photo pxSize={128} />
            </S.PhotoContainer>
            <span>Hi, John Doe!</span>
          </S.Avatar>

          <FormBox title="Personal data">
            <Input
              maxLength={80}
              placeholder="Type your name"
              label="Full name"
            />
            <Input
              maxLength={80}
              placeholder="john.doe@email.com"
              label="Email"
            />
          </FormBox>

          <div>
            <Button
              onClick={() =>
                alert('This form is just an example. Nothing changed 🙂')
              }
            >
              Save info
            </Button>
          </div>
        </S.SmallContainer>

        {photoModal && <EditPhotoModal onClose={onCloseModal} />}
      </ContainerMedium>
    </>
  )
}
