import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  justify-content: center;

  padding: 0 2.5rem;

  label {
    padding: 1.5rem;
    border-radius: 0.3rem;
    border: var(--primary-cyan) 1px dashed;

    background: var(--grey-dark);

    cursor: pointer;
    transition: background 0.3s;

    color: var(--white);

    margin: 0 auto;

    &:hover {
      background: var(--grey-darkest);
    }
  }

  input {
    display: none;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const SelectAnotherImg = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
