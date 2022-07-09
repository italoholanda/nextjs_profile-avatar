import styled from 'styled-components'
import { ContainerLarge } from 'styles/container'

export const Wrapper = styled.div`
  border-bottom: var(--grey-lighten) 1px solid;
`

export const Container = styled(ContainerLarge)`
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > div {
    display: flex;
    align-items: center;

    &:first-child {
      justify-content: flex-start;
    }

    &:nth-child(2) {
      justify-content: center;
    }

    &:nth-child(3) {
      justify-content: flex-end;
    }
  }
`
