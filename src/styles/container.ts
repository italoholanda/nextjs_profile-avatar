import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`

export const ContainerSmall = styled(Container)`
  max-width: 680px;
`

export const ContainerMedium = styled(Container)`
  max-width: 1280px;
`

export const ContainerLarge = styled(Container)`
  max-width: 1440px;
`
