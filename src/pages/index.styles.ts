import styled from 'styled-components'

import { ContainerSmall } from 'styles/container'

import AvatarComponent from '../components/Avatar'

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
export const PhotoContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 0 0 4px var(--primary-cyan);
  }

  &:hover:before {
    content: 'Edit your photo';
    position: absolute;
    right: -6rem;
    top: calc(50% - 0.5rem);
    font-size: 0.75rem;
  }
`
export const Photo = styled(AvatarComponent)``
