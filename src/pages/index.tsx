import Header from 'components/Header'

import * as S from './index.styles'

import { ContainerMedium } from 'styles/container'

import FormBox from 'components/FormBox'
import Input from 'components/Input'
import Button from 'components/Button'

export default function Home() {
  return (
    <>
      <Header />
      <ContainerMedium>
        <h1>PROFILE</h1>

        <S.SmallContainer>
          <S.Avatar>
            <S.Photo />
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
            <Button>Save info</Button>
          </div>
        </S.SmallContainer>
      </ContainerMedium>
    </>
  )
}
