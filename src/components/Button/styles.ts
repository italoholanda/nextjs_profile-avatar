import styled from 'styled-components'
import { typoSystem } from 'styles/global'

export const Wrapper = styled.button`
  padding: 0.75rem 1rem;
  background: var(--primary-cyan);
  border-radius: 0.3rem;
  border-color: transparent;

  font-size: 1rem;
  font-weight: 700;
  font-family: 'IBM Plex Mono', ${typoSystem};
  text-transform: uppercase;

  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: var(--white);
  }
`
