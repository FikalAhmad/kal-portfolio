import { css } from "@emotion/css";

export const ContactContainer = css`
  position: relative;
  padding: 5px 0 0;
  background: linear-gradient(90deg, var(--lightblue), var(--blue)) top;
  background-repeat: no-repeat;
  .container {
    display: flex;
    column-gap: 50px;
    font-family: CircularBold;
    color: var(--blue);
    background-color: var(--white);
    padding: 100px 100px 0;
  }
  .contact {
    &--image img {
      max-width: 400px;
    }
    &--text {
      &-h1 {
        font-size: 40px;
      }
      &-p {
        color: var(--darkblue);
        font-size: 64px;
      }
    }
    &--deeptext {
      font-family: CircularBook;
    }
    &--direct {
      display: flex;
      align-items: center;
      column-gap: 10px;
      margin-top: 8px;
    }
    &--direct img {
      max-height: 25px;
    }
    &--direct p {
      font-family: CircularLight;
      font-size: 24px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
      flex-direction: column;
      align-items: center;
      column-gap: 50px;
      padding: 100px 50px 0;
    }
    .contact {
      &--image img {
        max-width: 500px;
      }
      &--text {
        &-p {
          font-size: 72px;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      flex-direction: column;
      align-items: center;
      column-gap: 0;
      row-gap: 25px;
      padding: 100px 25px 0;
    }
    .contact {
      &--image img {
        max-width: 350px;
      }
      &--text {
        &-h1 {
          font-size: 32px;
        }
        &-p {
          font-size: 48px;
        }
      }
      &--direct {
        display: flex;
        align-items: center;
        column-gap: 0px;
        row-gap: 10px;
      }
      &--direct p {
        margin-left: 10px;
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .container {
      padding: 80px 25px 0;
    }
    .contact {
      &--image img {
        max-width: 280px;
      }
      &--text {
        &-h1 {
          font-size: 28px;
        }
        &-p {
          font-size: 42px;
        }
      }
      &--deeptext h1 {
        font-size: 24px;
      }
      &--direct {
        column-gap: 5px;
      }
      &--direct p {
        font-size: 18px;
      }
    }
  }
`;
