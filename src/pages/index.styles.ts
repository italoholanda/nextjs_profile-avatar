import styled from 'styled-components'

import { ContainerSmall } from 'styles/container'

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`

export const SmallContainer = styled(ContainerSmall)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Photo = styled.div`
  background-image: url('/svg/avatar.svg');
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 50%;

  height: 6.5rem;
  width: 6.5rem;

  position: relative;

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 0 2px var(--primary-cyan);
  }

  &:hover:before {
    content: 'Edit your photo';
    position: absolute;
    right: -8rem;
    top: calc(50% - 0.5rem);
  }
`
