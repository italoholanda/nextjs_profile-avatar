import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;

  .ReactCrop {
    box-shadow: 0 0 0 2px var(--primary-cyan);
    border-radius: 0.5rem;
    max-height: 40vh;
    max-width: 70vw;
  }

  .ReactCrop__crop-selection,
  .ReactCrop--circular-crop {
    border: transparent;
    box-shadow: transparent;
  }

  .ReactCrop__drag-bar {
    border: transparent;
  }

  .ReactCrop__drag-handle::after {
    border: transparent;
    background: transparent;
  }
`
