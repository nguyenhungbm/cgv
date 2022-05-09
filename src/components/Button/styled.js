import styled, { css } from "vue-styled-components";

const buttonProps = {
  width: String,
  height: String,
  variant: String,
};

const buttonVariantStyles = {
  primary: css`
    background: ${({ theme }) => theme.background.curiousBlue};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  `,
  default: css`
    background: ${({ theme }) => theme.background.athensGray};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  `,
  primaryOutline: css`
    background: ${({ theme }) => theme.background.white};
    color: ${({ theme }) => theme.colors.curiousBlue};
    border-color: ${({ theme }) => theme.colors.curiousBlue};

    &:hover {
      background: ${({ theme }) => theme.background.curiousBlue};
      color: ${({ theme }) => theme.colors.white};
      border-color: transparent;
    }
  `,
  success: css`
    background: ${({ theme }) => theme.background.chateauGreen};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  `,
  successOutline: css`
    background: ${({ theme }) => theme.background.white};
    color: ${({ theme }) => theme.colors.chateauGreen};
    border-color: ${({ theme }) => theme.colors.chateauGreen};

    &:hover {
      background: ${({ theme }) => theme.background.chateauGreen};
      color: ${({ theme }) => theme.colors.white};
      border-color: transparent;
    }
  `,
};

export const Wrapper = styled("div", buttonProps)`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    min-width: min-content;
    font-size: 20px;
    letter-spacing: -0.18px;
    line-height: 27px;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    ${(props) => buttonVariantStyles[props.variant]}

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;
    }
  }
`;
