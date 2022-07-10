import styled from 'styled-components'

export const Wrapper = styled.div`
  #loading-spinner {
    display: block;
    margin: 0 auto;
    -webkit-animation: loading-spinner-spin 2s linear infinite;
    animation: loading-spinner-spin 2s linear infinite;
    will-change: transform;
  }

  @-webkit-keyframes loading-spinner-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes loading-spinner-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  #loading-circle {
    stroke-dasharray: 105;
    stroke-dashoffset: 105;
    stroke-linecap: round;
    -webkit-animation: loading-spinner 1.7s
      cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    animation: loading-spinner 1.7s cubic-bezier(0.445, 0.05, 0.55, 0.95)
      infinite;
    transform: translateZ(0);
    transform-origin: center;
    will-change: stroke-dashoffset;
  }

  @-webkit-keyframes loading-spinner {
    0% {
      stroke-dashoffset: 95;
      transform: scaleY(1);
    }
    49.99% {
      stroke-dashoffset: 0;
      transform: scaleY(1);
    }
    50% {
      stroke-dashoffset: 0;
      transform: scaleY(-1) rotate(25deg);
    }
    100% {
      stroke-dashoffset: 95;
      transform: scaleY(-1) rotate(-32deg);
    }
  }

  @keyframes loading-spinner {
    0% {
      stroke-dashoffset: 95;
      transform: scaleY(1);
    }
    49.99% {
      stroke-dashoffset: 0;
      transform: scaleY(1);
    }
    50% {
      stroke-dashoffset: 0;
      transform: scaleY(-1) rotate(25deg);
    }
    100% {
      stroke-dashoffset: 95;
      transform: scaleY(-1) rotate(-32deg);
    }
  }
`
