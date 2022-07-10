import * as S from './styles'

interface Props {
  hexColor?: string
}

const LoadingSpinner = ({ hexColor = '#FDFDFD' }: Props) => {
  return (
    <S.Wrapper>
      <svg
        id="loading-spinner"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="loading-circle"
          cx="20"
          cy="20"
          r="18"
          stroke={hexColor}
          strokeWidth="4"
        />
      </svg>
    </S.Wrapper>
  )
}

export default LoadingSpinner
