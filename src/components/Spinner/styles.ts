import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
`;

export const SpinnerWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
`;

export const DoubleBounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${BounceAnimation} 2s infinite ease-in-out;
  animation: ${BounceAnimation} 2s infinite ease-in-out;
`;

export const DoubleBounce2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${BounceAnimation} 2s infinite ease-in-out;
  animation: ${BounceAnimation} 2s infinite ease-in-out;

  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`;
