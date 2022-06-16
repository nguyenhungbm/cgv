import styled, { keyframes } from "vue3-styled-components";

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinLoadingProps = {
  size: Number,
};

export default styled("div", SpinLoadingProps)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;

  &:after {
    content: "";
    display: block;
    width: ${(props) => props.size || 23}px;
    height: ${(props) => props.size || 23}px;
    border-color: transparent black transparent;
    border-style: solid;
    border-width: 2px;
    border-radius: 30px;
    backface-visibility: none;
    transform: rotate(0deg);
    animation: ${SpinAnimation} 0.5s linear infinite;
  }
`;
