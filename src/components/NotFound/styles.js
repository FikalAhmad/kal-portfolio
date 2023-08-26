import { css } from "@emotion/css";

export const NotFoundContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);
  height: 100vh;

  .nf {
    &--image img {
      max-width: 500px;
    }
    &--btn {
    }
  }
  .btn {
    border: none;
    border-radius: 10px;
    font-family: CircularMedium;
    font-size: 24px;
    color: black;
    background-color: var(--white);
    padding: 20px 38px;
    transition: 0.3s;
    &:hover {
      background-color: var(--darkblue);
      color: white;
    }
  }
`;
