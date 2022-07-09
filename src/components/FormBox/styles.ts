import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--grey-dark);
  border: var(--grey-lighten) 1px solid;
  border-radius: 0.3rem;
  padding: 1.5rem;
`

export const Header = styled.div<{ isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    cursor: pointer;
    padding: 0.5rem;
    user-select: none;
  }

  img {
    transition: transform 0.3s;
    transform: ${(p) => (p.isVisible ? 'none' : 'rotate(180deg)')};
  }
`

export const Content = styled.div<{ isVisible: boolean }>`
  display: ${(p) => (p.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`
