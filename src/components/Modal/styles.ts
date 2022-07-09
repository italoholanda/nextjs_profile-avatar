import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--grey-darkest-alpha);
  padding: 0 2rem;
`

export const Modal = styled.div`
  background: var(--grey-dark);

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  border-radius: 0.3rem;

  width: 42.5rem;
`

export const Header = styled.div`
  padding: 0 2.5rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.strong`
  color: var(--yellow-50);
  font-size: 1.125rem;
`

export const Close = styled.button`
  background: transparent;
  border: transparent;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`
