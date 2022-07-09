import styled from 'styled-components'

import { typoSystem } from 'styles/global'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-family: 'IBM Plex Mono', ${typoSystem};
    font-size: 0.75rem;
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 0.3rem;
    border: var(--grey-lighten) 1px solid;
    background: var(--grey-medium);
    outline: none;
    transition: all 0.3s;
    color: var(--white);

    font-size: 1rem;

    &:focus {
      box-shadow: 0 0 0 2px var(--primary-cyan);
    }
  }
`
