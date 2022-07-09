import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    padding: 1rem;
    border-radius: 0.3rem;
    border: var(--primary-cyan) 1px dashed;

    background: var(--grey-dark);

    cursor: pointer;
    transition: background 0.3s;

    color: var(--white);

    &:hover {
      background: var(--grey-darkest);
    }
  }

  input {
    display: none;
  }
`
