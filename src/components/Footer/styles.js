import { css } from "@emotion/css";

export const FooterContainer = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0 25px;
  font-family: CircularMedium;
  background-color: var(--white);
  color: var(--darkblue);
  .footer {
    &--btn {
      cursor: pointer;
      font-family: CircularMedium;
      border: none;
      border-radius: 8px;
      padding: 10px 18px;
      background-color: var(--blue);
      color: var(--white);
      &:hover {
        background-color: var(--darkblue);
        color: white;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .footer {
      &--btn {
        border-radius: 8px;
        padding: 10px 18px;
      }
    }
  }
  @media screen and (max-width: 576px) {
    align-items: center;
    padding: 25px;
    .footer {
      &--btn {
        border-radius: 10px;
        margin-left: 50px;
        padding: 8px 13px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    padding: 15px;
    p {
      font-size: 12px;
    }
    .footer {
      &--btn {
        margin-left: 10px;
        padding: 8px 10px;
      }
    }
  }
`;
