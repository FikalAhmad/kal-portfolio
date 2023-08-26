import { css } from "@emotion/css";

export const AboutContainer = css`
  font-family: CircularMedium;
  color: var(--white);
  padding: 100px 100px 0;

  h1 {
    font-size: 36px;
    &::before {
      content: "";
      display: inline-block;
      width: 150px;
      border-top: 10px solid var(--white);
      border-radius: 10px;
      margin-right: 10px;
    }
  }
  h2 {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    font-family: CircularBook;
    background-color: var(--darkblue);
    padding: 10px;
    border-radius: 10px;
  }

  .about {
    &--content {
      margin: 30px 0;
      display: flex;
      justify-content: space-between;
    }
    &--text {
      margin-left: 50px;
    }
    &--desc {
      font-family: CircularBook;
      font-size: 28px;
      text-align: justify;
      margin-bottom: 30px;
    }
    &--icon {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      gap: 50px 10px;
      justify-content: space-between;
    }
    &--icon img {
      max-width: 80px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 100px 50px 0;
    h1 {
      font-size: 32px;
      &::before {
        width: 100px;
      }
    }
    .about {
      &--content {
        flex-direction: column;
        align-items: center;
      }
      &--text {
        margin-left: 0;
      }
      &--desc {
        font-size: 24px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 80px 25px 0;
    h1 {
      font-size: 36px;
      &::before {
        content: "";
        display: inline-block;
        width: 70px;
        border-top: 10px solid var(--white);
        border-radius: 10px;
        margin-right: 10px;
      }
    }
    h2 {
      padding: 10px;
    }
    .about {
      &--content {
        flex-direction: column;
        align-items: center;
      }
      &--text {
        margin-left: 0;
      }
      &--desc {
        font-family: CircularLight;
        font-size: 24px;
      }
      &--icon {
        grid-template-columns: auto auto auto auto;
      }
    }
  }
  @media screen and (max-width: 400px) {
    padding: 80px 25px 0;

    h1 {
      font-size: 32px;
      &::before {
        content: none;
        display: none;
        width: 0px;
        border-top: 0 solid var(--white);
        border-radius: 0;
        margin-right: 0;
      }
    }
    h2 {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      font-family: CircularBook;
      background-color: var(--darkblue);
      padding: 10px;
      border-radius: 10px;
    }
    .about {
      &--content img {
        max-width: 280px;
      }
      &--desc {
        font-size: 20px;
      }
      &--icon {
        grid-template-columns: auto auto auto;
      }
      &--icon img {
        max-width: 65px;
      }
    }
  }
`;
